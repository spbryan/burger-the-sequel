/***********************************************
 * Project: Burger The Sequel
 * Developer: Sean Bryan
 * Date: 2019-07-01
 ***********************************************/
module.exports = function (sequelize, DataTypes) {
    var Burger = sequelize.define("Burger", {
        burger_name: DataTypes.STRING,
        devoured: DataTypes.BOOLEAN
    });
    return Burger;
};