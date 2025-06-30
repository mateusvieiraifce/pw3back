const express = require('express');
const router = express.Router();
const servicoController = require('../controllers/ServicosController');



// Rotas CRUD
router.get('/services', servicoController.List);
router.post('/services', servicoController.create);
router.delete('/services/delete/:id', servicoController.delete);
router.get('/services/:id', servicoController.getById);
router.put('/services/:id', servicoController.update);


module.exports = router
//router.get('/users', UserController.list);
//router.get('/users/:id', UserController.show);
//router.put('/users/:id', UserController.update);
//router.delete('/users/:id', UserController.delete);
