---
sidebar_position: 5
---

# Interceptors

## Interceptor là gì?

- **Interceptor** có thể hiểu như một bước tường lưới chặn các **request** , **response** của ứng dụng để cho phép kiểm tra, thay đổi các params của **request** , **response** . Nó cho phép chúng ta kiểm tra các token ứng dụng, `Content-Type` hoặc tự thêm `headers` vào **request** . Điều này cho phép chúng ta tận dụng tối đa thao tác chỉnh sửa `headers`, `body`, **param request** gửi lên server sao cho hợp lý nhất, bảo mật nhất

## Request interceptor (bộ chặn request)

```ts
import axios from "axios";

const ApiClient = axios.create({ baseURL: Config.API_URL });

ApiClient.interceptors.request.use(
  async (config) => {
    const accessToken = await AsyncStorage.getItem(EStorage.ACCESS_TOKEN);
    config.headers["Authorization"] = accessToken
      ? `Bearer ${accessToken}`
      : "";
    return config;
  },
  (error) => Promise.reject(error)
);
```

## Response interceptor (bộ chặn response)

```ts
import axios, { AxiosError } from "axios";

const ApiClient = axios.create({ baseURL: Config.API_URL });

type TErrorResponseData = {
  id: string;
  statusCode: number;
  errorType: string;
  message: string;
  error: string;
};

class ErrorResponse extends Error {
  data?: TErrorResponseData;
  constructor(message: string, data?: TErrorResponseData) {
    super(message);
    this.data = data;
  }
}

ApiClient.interceptors.response.use(
  (response) => response,
  async (error: AxiosError<TErrorResponseData>) => {
    if (error.response?.status === 401) {
      await AsyncStorage.getAllKeys().then(AsyncStorage.multiRemove); // Loại bỏ hết access_token,... đang lưu ở local storage
      GlobalNavigation.reset(ERootScreenList.GUEST_NAVIGATOR); // Navigate về màn đăng nhập
      throw new ErrorResponse("Login session expired"); // Trả về lỗi với message: "Login session expired"
    }
    if (error.response) {
      const errorResponseData = error.response.data;
      const errorMessage = errorResponseData.message;
      throw new ErrorResponse(errorMessage, errorResponseData);
    }
    return Promise.reject(error);
  }
);
```

## Refresh token trong interceptor

```ts
import axios from "axios";

const setTokens = (accessToken: string, refreshToken: string) => {
  localStorage.setItem("accessToken", accessToken);
  localStorage.setItem("refreshToken", refreshToken);
};

const getAccessToken = () => localStorage.getItem("accessToken");
const getRefreshToken = () => localStorage.getItem("refreshToken");
const clearTokens = () => {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
};

const axiosInstance = axios.create({
  baseURL: "https://your-api.com/api",
});

// Biến lưu trữ trạng thái làm mới token
let isRefreshing: boolean = false;
let refreshSubscribers: ((newToken: string | null) => void)[] = [];

// Hàm đăng ký lại yêu cầu khi token đang được làm mới
const onRefreshed = (newToken: string) => {
  refreshSubscribers.forEach((callback) => callback(newToken));
  refreshSubscribers = [];
};

axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = getAccessToken();
    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // Nếu nhận 401 và chưa thử refresh token thì xử lý
    if (error.response?.status === 401 && !originalRequest._retry) {
      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          refreshSubscribers.push((newToken: string | null) => {
            if (newToken) {
              originalRequest.headers["Authorization"] = `Bearer ${newToken}`;
              resolve(axiosInstance(originalRequest));
            } else {
              reject(error);
            }
          });
        });
      }

      originalRequest._retry = true;
      isRefreshing = true;

      try {
        const refreshToken = getRefreshToken();
        const { data: responseData } = await axios.post(
          "https://your-api.com/api/auth/refresh",
          {
            refreshToken,
          }
        );

        const { accessToken: newAccessToken, refreshToken: newRefreshToken } =
          responseData;
        setTokens(newAccessToken, newRefreshToken);
        axiosInstance.defaults.headers[
          "Authorization"
        ] = `Bearer ${newAccessToken}`;
        originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
        onRefreshed(newAccessToken);

        return axiosInstance(originalRequest);
      } catch (refreshError) {
        // ❌ Nếu refresh token cũng không hợp lệ, từ chối tất cả request trong hàng đợi
        refreshSubscribers.forEach((callback) => callback(null));
        refreshSubscribers = [];

        clearTokens();
        window.location.href = "/login";

        return Promise.reject(refreshError);
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  }
);
```
