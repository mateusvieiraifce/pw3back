const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/ClienteController');



// Rotas CRUD
router.get('/clientes', clienteController.List);
router.post('/clientes', clienteController.create);
router.delete('/clientes/:id', clienteController.delete);
router.get('/clientes/:id', clienteController.getById);
router.put('/clientes/:id', clienteController.update);


module.exports = router
