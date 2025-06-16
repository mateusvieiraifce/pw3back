const express = require('express');
const router = express.Router();
const vendaController = require('../controllers/VendasController');



// Rotas CRUD
router.get('/vendas', vendaController.List);
router.post('/vendas', vendaController.create);
/*router.delete('/cliente/:id', clienteController.delete);
router.get('/cliente/:id', clienteController.getById);
router.put('/cliente/:id', clienteController.update);
*/

module.exports = router
