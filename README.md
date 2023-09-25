# Project: express-crud-api
CRUD API sederhana, dibuat untuk menyelesaikan challenge internship DOT Indonesia.

API ini merupakan API untuk aplikasi toko, dimana pengguna dapat mengelola produk dan pesanan.

API ini menggunakan mongoDB untuk menyimpan data serta memanfaatkan JWT untuk autentikasi.

Project Pattern yang digunakan adalah MVC yakni dengan memisahkan komponen Model, View, dan Controller. Project pattern ini dipilih karena sangat memudahkan dalam pengelolaan dan pengorganisasian kode. Dengan memisahkan setiap bagian dengan perannya masing-masing, hal ini akan membuat kita dengan mudah menambahkan atau mengubah komponen sesuai yang dibutuhkan tanpa harus merusak keseluruhan aplikasi.
# 📁 Collection: Products 


## End-point: All Products
Digunakan untuk menampilkan daftar seluruh produk yang tersedia
### Method: GET
>```
>http://localhost:3000/products/
>```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: By ID
Digunakan untuk menampilkan detail produk berdasarkan ID produk
### Method: GET
>```
>http://localhost:3000/products/6510e120e0502982cbefd3d6
>```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Add Product
Digunakan untuk menambahkan produk
### Method: POST
>```
>http://localhost:3000/products/
>```
### Headers

|Content-Type|Value|
|---|---|
|Authorization|Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAZ21haWwuY29tIiwidXNlcklkIjoiNjUwZmUwYTA4MTM2MTQ0OTBiOTgyYzczIiwiaWF0IjoxNjk1NTk2ODkzLCJleHAiOjE2OTU2MDA0OTN9.5u3BqHqh0voLW2bAfztcdsuWLXNNKjVGzgUMVSDPdbI|


### Headers

|Content-Type|Value|
|---|---|
|Content-Type|application/json|


### Body (**raw**)

```json
{
    "name":"sarimie",
    "price":2000
}
```

### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAZ21haWwuY29tIiwidXNlcklkIjoiNjUxMGQ4OGY4OWJhZmU2MDQ2OTU0NGU1IiwiaWF0IjoxNjk1NjA0OTU3LCJleHAiOjE2OTU2MDg1NTd9.M3BShMKuMJT5g-mUime9YwnCTRg1PD-Tw9axISTYSCc|string|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: UPDATE
Digunakan untuk meng-update atau mengedit detail produk
### Method: PATCH
>```
>http://localhost:3000/products/6510e0f427de42d759da81f6
>```
### Body (**raw**)

```json
[
    {"propName":"name", "value":"indomie soto"},
    {"propName":"price", "value":"2500"}
]
```

### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAZ21haWwuY29tIiwidXNlcklkIjoiNjUxMGQ4OGY4OWJhZmU2MDQ2OTU0NGU1IiwiaWF0IjoxNjk1NjA0OTU3LCJleHAiOjE2OTU2MDg1NTd9.M3BShMKuMJT5g-mUime9YwnCTRg1PD-Tw9axISTYSCc|string|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: DELETE
Digunakan untuk menghapus produk berdasarkan ID produk
### Method: DELETE
>```
>http://localhost:3000/products/6510e120e0502982cbefd3d6
>```
### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAZ21haWwuY29tIiwidXNlcklkIjoiNjUxMGQ4OGY4OWJhZmU2MDQ2OTU0NGU1IiwiaWF0IjoxNjk1NjA0OTU3LCJleHAiOjE2OTU2MDg1NTd9.M3BShMKuMJT5g-mUime9YwnCTRg1PD-Tw9axISTYSCc|string|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
# 📁 Collection: Orders 


## End-point: Create Order
Digunakan untuk membuat pesanan baru
### Method: POST
>```
>http://localhost:3000/orders
>```
### Body (**raw**)

```json
{
    "productId":"650e3270c4ae82436cc61d42",
    "quantity":"5"
}
```

### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAZ21haWwuY29tIiwidXNlcklkIjoiNjUxMGQ4OGY4OWJhZmU2MDQ2OTU0NGU1IiwiaWF0IjoxNjk1NjA0OTU3LCJleHAiOjE2OTU2MDg1NTd9.M3BShMKuMJT5g-mUime9YwnCTRg1PD-Tw9axISTYSCc|string|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: All Orders
Digunakan untuk menampilkan semua pesanan
### Method: GET
>```
>http://localhost:3000/orders/
>```
### Headers

|Content-Type|Value|
|---|---|
|Authorization|Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAZ21haWwuY29tIiwidXNlcklkIjoiNjUwZmUwYTA4MTM2MTQ0OTBiOTgyYzczIiwiaWF0IjoxNjk1NTk2ODkzLCJleHAiOjE2OTU2MDA0OTN9.5u3BqHqh0voLW2bAfztcdsuWLXNNKjVGzgUMVSDPdbI|


### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAZ21haWwuY29tIiwidXNlcklkIjoiNjUxMGQ4OGY4OWJhZmU2MDQ2OTU0NGU1IiwiaWF0IjoxNjk1NjA0OTU3LCJleHAiOjE2OTU2MDg1NTd9.M3BShMKuMJT5g-mUime9YwnCTRg1PD-Tw9axISTYSCc|string|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: By ID
Digunakan untuk menampilkan detail pesanan berdasarkan ID
### Method: GET
>```
>http://localhost:3000/orders/650e3819ac31340f941a1806
>```
### Headers

|Content-Type|Value|
|---|---|
|Authorization|Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAZ21haWwuY29tIiwidXNlcklkIjoiNjUwZmUwYTA4MTM2MTQ0OTBiOTgyYzczIiwiaWF0IjoxNjk1NTk2ODkzLCJleHAiOjE2OTU2MDA0OTN9.5u3BqHqh0voLW2bAfztcdsuWLXNNKjVGzgUMVSDPdbI|


### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAZ21haWwuY29tIiwidXNlcklkIjoiNjUxMGQ4OGY4OWJhZmU2MDQ2OTU0NGU1IiwiaWF0IjoxNjk1NjA0OTU3LCJleHAiOjE2OTU2MDg1NTd9.M3BShMKuMJT5g-mUime9YwnCTRg1PD-Tw9axISTYSCc|string|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: DELETE
Digunakan untuk menghapus pesanan
### Method: DELETE
>```
>http://localhost:3000/orders/650fd8dd017d7e2525cc8712
>```
### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAZ21haWwuY29tIiwidXNlcklkIjoiNjUxMGQ4OGY4OWJhZmU2MDQ2OTU0NGU1IiwiaWF0IjoxNjk1NjA0OTU3LCJleHAiOjE2OTU2MDg1NTd9.M3BShMKuMJT5g-mUime9YwnCTRg1PD-Tw9axISTYSCc|string|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
# 📁 Collection: Users 


## End-point: Create User
DIgunakan untuk membuat user baru
### Method: POST
>```
>http://localhost:3000/user/signup
>```
### Headers

|Content-Type|Value|
|---|---|
|Content-Type|application/json|


### Body (**raw**)

```json
{
    "email":"test@gmail.com",
    "password":"test123"
}
```

### 🔑 Authentication noauth

|Param|value|Type|
|---|---|---|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Login
Digunakan untuk login menggunakan akun user yang telah dibuat sebelumnya
### Method: POST
>```
>http://localhost:3000/user/login
>```
### Body (**raw**)

```json
{
    "email":"test@gmail.com",
    "password":"test123"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Remove User
Digunakan untuk menghapus user
### Method: DELETE
>```
>http://localhost:3000/user/650fe0a0813614490b982c73
>```
### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAZ21haWwuY29tIiwidXNlcklkIjoiNjUxMGQ4OGY4OWJhZmU2MDQ2OTU0NGU1IiwiaWF0IjoxNjk1NjA3NTkyLCJleHAiOjE2OTU2MTExOTJ9.LeAzWP17TTke0DqOMqIXsutPnAn64jQYEiWdx0li73w|string|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
_________________________________________________
Powered By: [postman-to-markdown](https://github.com/bautistaj/postman-to-markdown/)
