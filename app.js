const express = require('express');
const { json } = require('express/lib/response');
const mysql = require('mysql2');

const bodyParser = require('body-parser');


const connection = require("./database/mysqlDB");


const app = express()
const port = 3000

// database init
function mysqlConnect() {
  global.connection = mysql.createConnection(connection);

  global.connection.connect(function (err) {
    if (err) {
      console.log("error when connecting to db");
      setTimeout(mysqlConnect, 2000);
    }
    console.log("connected to database");
  });
  global.connection.on("error", function (err) {
    if (err.code === "PROTOCOL_CONNECTION_LOST") {
      mysqlConnect();
    } else {
      throw err;
    }
  });
}
  
mysqlConnect();

//Để đọc dạng json người dùng nhập vào
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


//Routes
const categoryRoutes = require("./routes/category")
const productRoutes = require("./routes/product");
const userInformationRoutes = require("./routes/userInformation");
const accountInformationRoutes = require("./routes/accountInformation");
const saleOffRoutes = require("./routes/saleOff")

//API lấy thông tin danh mục
app.use('/category', categoryRoutes);

//API lấy thông tin sản phẩm
app.use("/product", productRoutes);

//API lấy thông tin người dùng qua thông tin tài khoản
app.use("/userInformation", userInformationRoutes);

//API lấy thông tin tài khoản phần đăng nhập
app.use("/accountInformation", accountInformationRoutes);

//API  thông tin ưu đãi
app.use("/saleOff", saleOffRoutes)

//Mở một cổng 3000 để chạy
app.listen(port, () => {
    console.log(`Ban dang o cong: ${port}`)
})