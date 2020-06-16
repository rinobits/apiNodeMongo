module.exports = (sequelize, type) => {
    return sequelize.define('products', {
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
        category: {
            type: type.STRING,
            allowNull: false
        },
        value: {
            type: type.STRING,
            allowNull: false
        },
        hasOffer: {
            type: type.INTEGER,
            allowNull: true
        },
        category: {
            type: type.STRING,
            allowNull: false
        }
    })
}