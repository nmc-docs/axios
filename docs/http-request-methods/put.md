---
sidebar_position: 3
---

# PUT

- Method **PUT** sẽ yêu cầu server cập nhật lại dữ liệu của đối tượng theo **ID** và trả về dữ liệu vừa mới cập nhật đó
- Cú pháp:

```ts
axiosInstance.put(URLendpointWithID: string, data: any, config: AxiosRequestConfig)
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

const putMethod = async () => {
  try {
    const newUser: User = {
      name: "John",
      age: 25,
      address: "New York",
    };
    const { data, status } = await api.put<User>("users/5", newUser);
    console.log(data.name, data.age, data.address);
    console.log(status);
  } catch (error) {
    const err = error as AxiosError;
    console.log(err.response?.status);
  }
};
```
