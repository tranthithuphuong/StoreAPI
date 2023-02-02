"use strict";

const Order = function (order) {
    this.ma_don_hang = order.ma_don_hang;
    this.ma_nguoi_dung = order.ma_nguoi_dung;
    this.tong_tien = order.tong_tien;
    this.trang_thai = order.trang_thai;
    this.tao_luc = order.tao_luc

}

Order.read = function (id, result) {
    connection.query("SELECT * FROM don_hang where ma_nguoi_dung = ?", [id], (err, res) => {
        if(err) {
            result(err, null)
        } else {
            result(null, res)
        }
    })
}


Order.create = function (order, result) {
    connection.query("INSERT INTO don_hang(ma_nguoi_dung, tong_tien, trang_thai) VALUES (?, ?, 'đang chờ xác nhận')", [order.ma_nguoi_dung, order.tong_tien],(err, res) => {
        if (err) {
            result(err, null);
        } else {
            connection.query("select * FROM don_hang order by tao_luc desc", (err, res) => {
                if (err) {
                    result(err, null);
                } else {
                    for(let item of order.data) {
                        connection.query("INSERT INTO thong_tin_don_hang(ma_don_hang, ma_san_pham, gia_tien, anh_san_pham, ten_san_pham) VALUES (?, ?, ?, ?, ?)", [res[0].ma_don_hang, item.ma_san_pham, item.gia_tien_san_pham, item.anh_san_pham, item.ten_san_pham],(err, res) => {

                        })
                    }
                    result(null, "Đã tạo đơn hàng thành công")
                }
            })
        }
    })
}

module.exports = Order;