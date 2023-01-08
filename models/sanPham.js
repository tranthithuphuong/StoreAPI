"sanPham strict";

const SanPham = function (sanPham) {
    this.ma_san_pham = sanPham.ma_san_pham;
    this.ten_san_pham = sanPham.ten_san_pham;
    this.anh_san_pham = sanPham.anh_san_pham;
    this.chi_tiet_san_pham = sanPham.chi_tiet_san_pham;
    this.ma_kich_co = sanPham.ma_kich_co;
    this.gia_tien_san_pham = sanPham.gia_tien_san_pham;
    this.ma_danh_muc = sanPham.ma_danh_muc;
}

SanPham.read = function (result) {
    connection.query("SELECT * FROM san_pham", (err, res) => {
        if (err) {
            result(err, null);
        } else {
            result(null, res);
        }
    })
}