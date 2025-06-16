const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/ClienteController');



// Rotas CRUD
router.get('/clientes', clienteController.List);
router.post('/clientes', clienteController.create);
router.delete('/cliente/:id', clienteController.delete);
router.get('/cliente/:id', clienteController.getById);
router.put('/cliente/:id', clienteController.update);


module.exports = router
