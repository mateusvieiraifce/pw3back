const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const TipoProduto = require('./TipoProduto');

const Product = sequelize.define('Product', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    barCode: {
        type: DataTypes.STRING,
        allowNull: false,
        unique:true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    tipoProdutoId: {
        type: DataTypes.INTEGER,
        allowNull: false,
       
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    quantidade: {
        type: DataTypes.INTEGER,
        allowNull: true, // Permite valores nulos
        defaultValue: 0 // Define um valor padrão de 0
    },
    
}, {
    timestamps: true // Cria campos createdAt e updatedAt automaticamente
});

// Relação Produto e TipoProduto

// Sincronizar o modelo com o banco de dados
(async () => {
    await Product.sync();
    console.log('Modelo Produto sincronizado com o banco de dados.');
})();

module.exports = Product;

