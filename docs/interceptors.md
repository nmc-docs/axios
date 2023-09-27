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
