---
sidebar_position: 2
---

# POST

- Method **POST** sẽ yêu cầu thêm dữ liệu lên trên server và trả về dữ liệu vừa yêu cầu
- Cú pháp:

```ts
axiosInstance.post(URLendpoint: string, data: any, config: AxiosRequestConfig)
```

- Ví dụ:

```ts
import axios, { AxiosError } from "axios";

const api = axios.create({
  baseURL: "https://63f0f29bff1b45a1a444a00a.mockapi.io/api/",
});

interface User {
  name: string;
  age: number;
  address: string;
}

const postMethod = async () => {
  try {
    const newUser: User = {
      name: "John",
      age: 25,
      address: "New York",
    };
    const { data, status } = await api.post<User>("users", newUser);
    console.log(data.name, data.age, data.address);
    console.log(status);
  } catch (error) {
    const err = error as AxiosError;
    console.log(err.response?.status);
  }
};
```
