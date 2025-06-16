const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Vendas = sequelize.define('Vendas', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },   
    idCliente: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    total: {
        type: DataTypes.FLOAT,
        allowNull: false,
    }
}, {
    timestamps: true // Cria campos createdAt e updatedAt automaticamente
});

// Sincronizar o modelo com o banco de dados
// Sincronizar o modelo com o banco de dados
(async () => {
    await Vendas.sync();
    console.log('Modelo Vendas sincronizado com o banco de dados.');
})();

module.exports = Vendas;
