const express = require('express');
const router = express.Router();
const vendaController = require('../controllers/VendasController');



// Rotas CRUD
router.get('/vendas', vendaController.List);
router.post('/vendas', vendaController.create);
router.delete('/vendas/:id', vendaController.delete);
router.get('/vendas/:id', vendaController.getById);
router.put('/vendas/:id', vendaController.update);


module.exports = router
