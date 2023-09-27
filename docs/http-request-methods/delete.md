---
sidebar_position: 4
---

# DELETE

- Method **DELETE** sẽ gửi yêu cầu xóa đối tượng lên trên server và trả về dữ liệu của đối tượng vừa xóa đó
- Cú pháp:

```ts
axiosInstance.delete(URLendpointWithID: string, config: AxiosRequestConfig)
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

const deleteMethod = async () => {
  try {
    const { data, status } = await api.delete<User>("users/5");
    console.log(data.name, data.age, data.address);
    console.log(status);
  } catch (error) {
    const err = error as AxiosError;
    console.log(err.response?.status);
  }
};
```
