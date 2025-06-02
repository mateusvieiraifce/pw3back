const {DataType} = require("sequelize")
const sequelize = require('../config/database')

const User = sequelize.define('User',{
    id:{ type:DataTypes.INTEGER,
        primaryKey:true
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false

    }
}, {timestamps:true});

(async()=>{

    await User.sync();
    console.log("sincronizado")
})

module.exports = User 

