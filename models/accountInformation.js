"accountInformation strict";

const AccountInformation = function (accountInformation) {
    this.ma_nguoi_dung = accountInformation.ma_nguoi_dung;
    this.ngay_tao = new Date()
    this.ngay_cap_nhat_cuoi = new Date();
    this.ma_trang_thai = accountInformation.ma_trang_thai;
}

AccountInformation.read = function (id, result) {
    connection.query("SELECT * FROM thong_tin_tai_khoan WHERE ma_nguoi_dung  = (?)", [id],(err, res) => {
        if (err) {
            result(err, null);
        } else {
            result(null, res);
        }
    })
}

module.exports = AccountInformation;