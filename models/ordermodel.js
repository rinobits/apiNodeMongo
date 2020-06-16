module.exports = (sequelize, type) => {
    return sequelize.define('orders', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: type.STRING,
            allowNull: false,
            unique: true
        },
        phone: {
            type: type.STRING,
            allowNull: false
        },
        email: {
            type: type.STRING,
            allowNull: false,
        },
        description: {
            type: type.TEXT,
            allowNull: false,
        },
        value: {
            type: type.INTEGER,
            allowNull: false,
        },
        deposit: {
            type: type.INTEGER,
            allowNull: false
        },
        message: {
            type: type.TEXT,
            allowNull: false
        }
    })
}