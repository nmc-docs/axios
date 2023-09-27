---
sidebar_position: 6
---

# Cancel request

- Giả sử đang trong quá trình xử lý **request** được gửi từ client, người dùng lại chuyển sang trang khác. Lúc này, **request** đang thực hiện cần phải được hủy bỏ.

```ts
import axios from "axios";

const api = axios.create({
  baseURL: "https://63f0f29bff1b45a1a444a00a.mockapi.io/api/",
  headers: {
    "Content-Type": "application/json",
  },
});

const controller = new AbortController();

const getMethod = async () => {
  try {
    const response = await api.get("users", { signal: controller.signal });
  } catch (error) {
    console.log(error);
  }
};

controller.abort(); //Sử dụng câu lệnh này để hủy bỏ request, thường được đặt trong cleanup function trong useEffect. Tức khi component unmounted (người dùng chuyển trang), sẽ thực hiện hủy bỏ request.
```
