"product strict";

const Product = function (product) {
    this.ma_san_pham = product.ma_san_pham;
    this.ten_san_pham = product.ten_san_pham;
    this.anh_san_pham = product.anh_san_pham;
    this.chi_tiet_san_pham = product.chi_tiet_san_pham;
    this.ma_kich_co = product.ma_kich_co;
    this.gia_tien_san_pham = product.gia_tien_san_pham;
    this.ma_danh_muc = product.ma_danh_muc;
    this.ngay_tao = new Date()
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

Product.readById = function (id, result) {
    connection.query("SELECT * FROM san_pham where ma_san_pham = ?", [id],(err, res) => {
        if (err) {
            result(err, null);
        } else {
            result(null, res);
        }
    })
}

Product.readNew = function(result) {
    connection.query("SELECT * FROM san_pham order by ngay_tao DESC limit 5;", (err, res) => {
        if (err) {
            result(err, null);
        } else {
            result(null, res);
        }
    })
}

Product.readByCategory = function(id, result) {
    connection.query("SELECT * FROM san_pham where ma_danh_muc = ?", [id],(err, res) => {
        if (err) {
            result(err, null);
        } else {
            result(null, res);
        }
    })
}

module.exports = Product;