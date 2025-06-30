const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Servicos = sequelize.define('Servicos', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },   
    codigo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descricao: {
        type: DataTypes.STRING,
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
    await Servicos.sync();
    console.log('Modelo ItenVendas sincronizado com o banco de dados.');
})();

module.exports = Servicos;
