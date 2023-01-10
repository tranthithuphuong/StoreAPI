"userInformation strict";

const UserInformation = function (userInformation) {
    this.ma_nguoi_dung = userInformation.ma_nguoi_dung;
    this.ho_ten = userInformation.ho_ten;
    this.anh_dai_dien = userInformation.anh_dai_dien;
    this.so_dien_thoai = userInformation.so_dien_thoai;
    this.ngay_sinh = new Date();
    this.dia_chi_chi_tiet = userInformation.dia_chi_chi_tiet;
    
}

UserInformation.read = function (id, result) {
    connection.query("SELECT * FROM thong_tin_nguoi_dung where ma_nguoi_dung = (?)", [id],(err, res) => {
        if (err) {
            result(err, null);
        } else {
            result(null, res);
        }
    })
}

module.exports = UserInformation;