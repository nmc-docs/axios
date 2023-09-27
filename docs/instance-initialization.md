---
sidebar_position: 3
---

# Khởi tạo instance axios

- Để khởi tạo một instance **axios**:

```ts
import axios from "axios";

const httpRequest = axios.create(config: AxiosRequestConfig);
```

- Khi tạo một instance **axios** , các cấu hình mà ta khởi tạo trong instance sẽ là cấu hình chung cho tất cả các **request** dùng instance này. Ta có thể thiết lập các giá trị mặc định cho các thông số như `baseURL`, `headers`,...
- Ví dụ:

```ts
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080/api/v1", // URL cơ sở của API
  headers: { "Content-Type": "application/json" }, // Cấu hình headers
  withCredentials: true, // Cho phép server gửi, nhận cookie từ request
  /*... Các cấu hình khác */
});
```

- Ta cũng có thể cấu hình riêng đối với từng **request** . Mỗi phương thức **GET** , **POST** , **PUT** , **DELETE** đều nhận một tham số cuối cùng là `config`. Nó là một object cũng có type là [AxiosRequestConfig ](./axios-instance#axiosrequestconfig)giống như khi ta khởi tạo instace **axios** như trên
