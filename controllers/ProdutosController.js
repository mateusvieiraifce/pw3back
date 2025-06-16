const { where } = require('sequelize')
const TipoProduto = require('../models/TipoProduto')
const Sequelize = require('sequelize');
const Product = require('../models/Produtos');

module.exports = class ProdutosController {

    static async List(req, res, next) {

        const tipos = await Produtos.findAll();
        res.status(200).json({ tipos: tipos })
    }

    static  async create(req,res, next){
        const { descricao } = req.body
        if (!descricao) {
            res.status(422).json({ message: 'a descrição é obrigatória' })
            return
        }

        const tipoExist = await TipoProduto.findOne({ where: { descricao:descricao } })

        if (tipoExist) {
            res.status(422).json({ message: 'tipo já cadastrado' })
            return
        }
        
        // const user = new TipoProduto({
        const tipo = new TipoProduto({
            descricao,
        })
        try {
            const save = await tipo.save()
            res.status(201).json({ tipo: tipo, message: "Tipo salvo com sucesso!" })
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

        const product = await Produtos.findByPk(id)
        if (!product) {
            res.status(404).json({ message: 'Produto não encontrado' })
            return
        }

        try {
            await product.destroy()
            res.status(200).json({ message: 'Produto deletado com sucesso!' })
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: error })
        }
    }

    // static async getById(req, res,next){
    //      const { id } = req.params
    //     if (!id) {
    //         res.status(422).json({ message: 'o id é obrigatório' })
    //         return
    //     }

    //     const user = await User.findByPk(id)
    //     if (!user) {
    //         res.status(404).json({ message: 'Usuário não encontrado' })
    //         return
    //     }

    //     res.status(200).json({ user: user })
    // }
    
    static  async update(req,res, next){
        const {name} = req.body
        const { id } = req.params
        if (!id) {
            res.status(422).json({ message: 'o id é obrigatório' })
            return
        }
       //user
        if (!name) {
            res.status(422).json({ message: 'o nome é obrigatório' })
            return
        }
    

        const productExist = await Produto.findByPk(id)
        if (!productExist) {
            res.status(404).json({ message: 'Produto não encontrado' })
            return
        }
        
       productExist.name = name
    

        try {
            const save = await productExist.save()
            res.status(200).json({ tipo: productExist, message: "Produto salvo com sucesso!" })
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: error })
        }
    }




}