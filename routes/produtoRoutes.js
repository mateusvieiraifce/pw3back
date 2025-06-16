const express = require('express');
const router = express.Router();
const produtoController = require('../controllers/ProdutoController');

// Rotas CRUD
router.get('/produto', ProdutoController.List);
router.post('/produto', ProdutoController.create);
router.delete('/produto/delete/:id', ProdutoController.delete);
router.put('/produto/:id', ProdutoController.update);
// router.get('/produto/:id', ProdutoController.getById);

module.exports = router
//router.get('/produto', ProdutoController.list);
//router.get('/produto/:id', ProdutoController.show);
//router.put('/produto/:id', ProdutoController.update);
//router.delete('/produto/:id', ProdutoController.delete);
