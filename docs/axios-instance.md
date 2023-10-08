---
sidebar_position: 2
---

# Các loại instance trong axios

## AxiosRequestConfig

- **AxiosRequestConfig** là type đại diện cho cấu hình của request được gửi từ client lên server.
- Các thuộc tính hay dùng thuộc **AxiosRequestConfig** :

| Config    | Value                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `headers` | Là một `object `chứa toàn bộ cấu hình cho phần `headers`của request                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `baseURL` | Là một `string` chứa đường dẫn API cơ sở                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `method`  | Một `string` là tên của HTTP request, nhận một trong 4 giá trị sau: `get`,`post`,`put`,`delete`                                                                                                                                                                                                                                                                                                                                                                                                                      |
| `url`     | Là một `string` chứa endpoint thuộc đường dẫn API                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `params`  | Là một `object` được sử dụng để gửi dữ liệu tham số (parameter) cùng với request, đặc biệt là trong các request HTTP GET. Dữ liệu tham số này thường được thêm vào URL của request, biểu thị dưới dạng chuỗi query.<br />Ví dụ: `axios.get('https://example.com/api/resource', { params: { param1: 'value1', param2: 'value2' }})`<br />Trong ví dụ này, Axios sẽ tự động thêm `param1=value1` và `param2=value2` vào URL của request, biến nó thành `https://example.com/api/resource?param1=value1&param2=value2`. |

## AxiosResponse `<T>`

- **AxiosResponse `<T>`** là một type đại diện cho response (phản hồi) từ server nếu request được thực hiện thành công, trong đó **T** là **generic type** (kiểu của dữ liệu trả về từ server)
- Các thuộc tính hay dùng thuộc **AxiosResponse** :

| Property     | Value                                                                                                          |
| ------------ | -------------------------------------------------------------------------------------------------------------- |
| `data`       | Là dữ liệu được gửi về từ server                                                                               |
| `status`     | Một**number** là mã trạng thái HTTP từ hồi đáp của server (2xx)                                                |
| `statusText` | Một**string** là thông điệp trạng thái HTTP từ hồi đáp của server                                              |
| `config`     | Là một**object** có kiểu [AxiosRequestConfig](#axiosrequestconfig) chứa toàn bộ cấu hình của request tương ứng |

## AxiosError `<T>`

- **AxiosError** là một type đại diện cho lỗi trả về từ server nếu request thực hiện bị thất bại, **T** là **generic type** (kiểu dữ liệu của lỗi trả về từ server)
- Các thuộc tính hay dùng thuộc **AxiosError** :

| Property   | Value                                                                                                                                                                                                                     |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `response` | Áp dụng cho**request** đã được tạo ra và server đã hồi đáp.<br />`error.response.status`: mã lỗi (401, 403, 404,…)<br />`error.response.statusText`: chứa thông điệp lỗi<br />`error.response.data`: chứa dữ liệu của lỗi |
| `config`   | Là một**object** có kiểu [AxiosRequestConfig](#axiosrequestconfig) chứa toàn bộ cấu hình của request tương ứng                                                                                                            |
