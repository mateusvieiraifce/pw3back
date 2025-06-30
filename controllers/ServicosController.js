const { where } = require('sequelize')
const Servicos = require('../models/Servicos');
const Sequelize = require('sequelize');

module.exports = class ServicosController {

    // Listar todos os produtos
    static async List(req, res, next) {

        const tipos = await Servicos.findAll();
        res.status(200).json({ servicos: tipos })
    }

    // Criar um novo produto
    static  async create(req,res, next){
            
            const { codigo, descricao,  precoUnitario } = req.body
            
            // Verifica se o nome foi enviado
            if (!codigo) {
                res.status(422).json({ message: 'O código de barras é obrigatório' })
                return
            }
            if (!descricao) {
                res.status(422).json({ message: 'O descricao é obrigatório' })
                return
            }
            
            if (!precoUnitario) {
                res.status(422).json({ message: 'O preço é obrigatório' })
                return
            }
            
            // Verifica se o produto já existe
            const produtoExist = await Servicos.findOne({ where: { name: name } })
    
            if (produtoExist) {
                res.status(422).json({ message: 'Serviço já cadastrado' })
                return
            }
            
            // Cria um novo produto
            const serv = new Servicos({
                codigo, descricao, precoUnitario
            });
            try {
                const save = await serv.save()
                res.status(201).json({ servicos: serv, message: "Serviço salvo com sucesso!" })
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

        const serv = await Servicos.findByPk(id)
        if (!serv) {
            res.status(404).json({ message: 'Serviço não encontrado' })
            return
        }

        try {
            await serv.destroy()
            res.status(200).json({ message: 'Produto deletado com sucesso!' })
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

        const user = await Servicos.findByPk(id)
    if (!user) {
             res.status(404).json({ message: 'Serviço não encontrado' })
             return
         }

         res.status(200).json({ user: user })
     }
    
    // Atualizar um produto
    static  async update(req,res, next){
        const {descricao, preco} = req.body
        const { id } = req.params
        if (!id) {
            res.status(422).json({ message: 'o id é obrigatório' })
            return
        }
       //user
        if (!descricao) {
            res.status(422).json({ message: 'o nome é obrigatório' })
            return
        }
       if (!preco) {
           res.status(422).json({ message: 'o preço é obrigatório' })
           return
       }

        const servExist = await Servicos.findByPk(id)
        if (!servExist) {
            res.status(404).json({ message: 'Serviço não encontrado' })
            return
        }
        
       servExist.descricao = descricao
       servExist.precoUnitario = preco

        try {
            const save = await servExist.save()
            res.status(200).json({ tipo: servExist, message: "Serviço salvo com sucesso!" })
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: error })
        }
    }




}