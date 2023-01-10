"category strict";

const Category = function (category) {
    this.ma_danh_muc = category.ma_danh_muc;
    this.ten_danh_muc = category.ten_danh_muc;
}

Category.read = function (result) {
    connection.query("SELECT * FROM danh_muc_san_pham", (err, res) => {
        if (err) {
            result(err, null);
        } else {
            result(null, res);
        }
    })
}

module.exports = Category;