const { Sequelize, DataTypes } = require("sequelize");
const db = require("../database/db");

const Sobre = db.define("Sobre", {
    sobreId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    comment: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports = Sobre;