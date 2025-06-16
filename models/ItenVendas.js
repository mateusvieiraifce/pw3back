const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const ItenVendas = sequelize.define('ItenVendas', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },   
    idVenda: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    idProduto: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    unidade: {
        type: DataTypes.STRING,
        allowNull: false
    },

    qtd: {
        type: DataTypes.FLOAT,
        allowNull: false
    },

    precoUnitario: {
        type: DataTypes.FLOAT,
        allowNull: false,
    }
}, {
    timestamps: true // Cria campos createdAt e updatedAt automaticamente
});

// Sincronizar o modelo com o banco de dados
// Sincronizar o modelo com o banco de dados
(async () => {
    await ItenVendas.sync();
    console.log('Modelo ItenVendas sincronizado com o banco de dados.');
})();

module.exports = ItenVendas;
