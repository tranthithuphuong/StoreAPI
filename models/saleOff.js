"saleOff strict";

const SaleOff = function (saleOff) {
    this.ma_uu_dai = saleOff.ma_uu_dai;
    this.ten_uu_dai = saleOff.ten_uu_dai;
    this.anh_uu_dai = saleOff.anh_uu_dai;
    this.chi_tiet_uu_dai = saleOff.chi_tiet_uu_dai;
    this.phan_tram_giam = saleOff.phan_tram_giam
}

SaleOff.read = function (result) {
    connection.query("SELECT * FROM uu_dai", (err, res) => {
        if (err) {
            result(err, null);
        } else {
            result(null, res);
        }
    })
}

module.exports = SaleOff;