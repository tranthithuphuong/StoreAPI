"product strict";

const Product = function (product) {
    this.ma_san_pham = product.ma_san_pham;
    this.ten_san_pham = product.ten_san_pham;
    this.anh_san_pham = product.anh_san_pham;
    this.chi_tiet_san_pham = product.chi_tiet_san_pham;
    this.ma_kich_co = product.ma_kich_co;
    this.gia_tien_san_pham = product.gia_tien_san_pham;
    this.ma_danh_muc = product.ma_danh_muc;
}

Product.read = function (result) {
    connection.query("SELECT * FROM san_pham", (err, res) => {
        if (err) {
            result(err, null);
        } else {
            result(null, res);
        }
    })
}

module.exports = Product;