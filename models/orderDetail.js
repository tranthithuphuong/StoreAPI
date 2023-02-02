"use Strict"


const OrderDetail = function(orderDetail) {
    this.ma_thong_tin_don_hang = orderDetail.ma_thong_tin_don_hang;
    this.ma_don_hang = orderDetail.ma_don_hang;
    this.gia_tien = orderDetail.gia_tien
}

OrderDetail.read = function(id, result) {
    connection.query("Select * From thong_tin_don_hang where ma_don_hang = ?", [id], (err, res) => {
        if(err) {
            result(err, null)
        } else {
            result(null, res)
        }
    })
}

module.exports = OrderDetail