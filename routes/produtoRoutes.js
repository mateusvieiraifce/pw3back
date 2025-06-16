const express = require('express');
const router = express.Router();
const produtoController = require('../controllers/ProdutosController');

// Rotas CRUD
router.get('/produtos', produtoController.List);
router.post('/produtos', produtoController.create);
router.delete('/produtos/delete/:id', produtoController.delete);
router.put('/produtos/:id', produtoController.update);
// router.get('/produtos/:id', ProdutoController.getById);

module.exports = router
//router.get('/produtos', ProdutoController.list);
//router.get('/produtos/:id', ProdutoController.show);
//router.put('/produtos/:id', ProdutoController.update);
//router.delete('/produtos/:id', ProdutoController.delete);
