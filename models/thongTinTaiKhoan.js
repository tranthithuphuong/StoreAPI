"thongTinTaiKhoan strict";

const ThongTinTaiKhoan = function (thongTinTaiKhoan) {
    this.ma_nguoi_dung = thongTinTaiKhoan.ma_nguoi_dung;
    this.ngay_tao = new Date()
    this.ngay_cap_nhat_cuoi = new Date();
    this.ma_trang_thai = thongTinTaiKhoan.ma_trang_thai;
    this.ten_dang_nhap = thongTinTaiKhoan.ten_dang_nhap;
}

ThongTinTaiKhoan.read = function (tenDangNhap, result) {
    connection.query("SELECT * FROM thong_tin_tai_khoan WHERE ten_dang_nhap  = (?)", [tenDangNhap],(err, res) => {
        if (err) {
            result(err, null);
        } else {
            result(null, res);
        }
    })
}