const { where } = require('sequelize')
const Produto = require('../models/Produtos');
const Sequelize = require('sequelize');

module.exports = class ProdutosController {

    // Listar todos os produtos
    static async List(req, res, next) {

        const tipos = await Produto.findAll();
        res.status(200).json({ tipos: tipos })
    }

    // Criar um novo produto
    static  async create(req,res, next){
            
            const { name, barcode, tipoProdutoId, price, quantidade } = req.body
            
            // Verifica se o nome foi enviado
            if (!barcode) {
                res.status(422).json({ message: 'O código de barras é obrigatório' })
                return
            }
            if (!name) {
                res.status(422).json({ message: 'O nome é obrigatório' })
                return
            }
            if (!tipoProdutoId) {
                res.status(422).json({ message: 'O tipo de produto é obrigatório' })
                return
            }
            if (!price) {
                res.status(422).json({ message: 'O preço é obrigatório' })
                return
            }
            
            // Verifica se o produto já existe
            const produtoExist = await Produto.findOne({ where: { name: name } })
    
            if (produtoExist) {
                res.status(422).json({ message: 'Produto já cadastrado' })
                return
            }
            
            // Cria um novo produto
            const produto = new Produto({
                barcode, nome, tipoProdutoId, price, quantidade
            })
            try {
                const save = await produto.save()
                res.status(201).json({ produto: produto, message: "Produto salvo com sucesso!" })
            } catch (error) {
                console.log(error)
                res.status(500).json({ message: error })
            }
        }

    // Deletar um produto
    static async delete(req,res,next) {
        const { id } = req.params
        if (!id) {
            res.status(422).json({ message: 'o id é obrigatório' })
            return
        }

        const product = await Produto.findByPk(id)
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
    
    // Atualizar um produto
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