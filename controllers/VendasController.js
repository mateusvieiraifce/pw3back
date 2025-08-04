const { where } = require('sequelize')
const Vendas = require('../models/Vendas')
const Sequelize = require('sequelize')
const jwt = require("jsonwebtoken")
require('dotenv').config()
const SECRET = process.env.SECRET; 

module.exports = class VendasController {

     static async List(req, res, next) {

        const clientes = await Vendas.findAll();
        res.status(200).json({ vendas: clientes })
    }

    static  async create(req,res, next){
        const { idCliente, total, itens} = req.body
        if (!idCliente) {
            res.status(422).json({ message: 'o nome é obrigatório' })
            return
        }
        if (!total) {
            res.status(422).json({ message: 'o Endereço é obrigatório' })
            return
        }
       
        const venda = new Vendas({
            idCliente,
            total,
        });

        try {
            const save = await venda.save()
            res.status(201).json({ venda: venda, itens:itens, message: "Cliente salvo com sucesso!" })
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: error })
        }
    }

    static async delete(req,res,next) {
        const { id } = req.params
        if (!id) {
            res.status(422).json({ message: 'o id é obrigatório' })
            return
        }

        const cliente = await Vendas.findByPk(id)
        if (!cliente) {
            res.status(404).json({ message: 'Venda não encontrado' })
            return
        }

        try {
            await cliente.destroy()
            res.status(200).json({ message: 'Venda deletado com sucesso!' })
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: error })
        }
    }

    static async getById(req, res,next){
         const { id } = req.params
        if (!id) {
            res.status(422).json({ message: 'o id é obrigatório' })
            return
        }

        const cliente = await Vendas.findByPk(id)
        if (!cliente) {
            res.status(404).json({ message: 'Vendas não encontrado' })
            return
        }

        res.status(200).json({ vendas: cliente })
    }
    
    static  async update(req,res, next){

       
        const { id } = req.params

         const { idCliente, total, itens} = req.body
        if (!idCliente) {
            res.status(422).json({ message: 'o Cliente é obrigatório' })
            return
        }
        if (!total) {
            res.status(422).json({ message: 'o total é obrigatório' })
            return
        }
       
        const venda = new Vendas({
            idCliente,
            total,
        });

        if (!id) {
            res.status(422).json({ message: 'o id é obrigatório' })
            return
        }
        
        

        const clienteExist = await Vendas.findByPk(id)
        if (!clienteExist) {
            res.status(404).json({ message: 'Vendas não encontrado' })
            return
        }
        
       clienteExist.idCliente = idCliente
       clienteExist.total = total
       
        try {
            const save = await clienteExist.save()
            res.status(200).json({ cliente: clienteExist, message: "Cliente salvo com sucesso!" })
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: error })
        }
    }
}