---
sidebar_position: 1
---

# GET

- Method **GET** sẽ yêu cầu server trả về toàn bộ dữ liệu
- Cú pháp:

```ts
axiosInstance.get(URLendpoint: string, config: AxiosRequestConfig)
```

- Ví dụ:

```ts
import axios, { AxiosError } from "axios";

const api = axios.create({
  baseURL: "https://63f0f29bff1b45a1a444a00a.mockapi.io/api/",
});

interface Task {
  name: string;
  wage: string;
  remainingTime: string;
}

const getMethod = async () => {
  try {
    const { data, status } = await api.get<Task[]>("users");
    console.log(data);
    console.log(status);
  } catch (error) {
    const err = error as AxiosError;
    console.log(err.response?.status);
  }
};
```
