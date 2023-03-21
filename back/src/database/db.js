const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
        dialect: 'sqlite',
        storage: './bd.sqlite',
        define: {
            timestamps: true,
            freezeTableName: true
          },
    });

module.exports = sequelize;