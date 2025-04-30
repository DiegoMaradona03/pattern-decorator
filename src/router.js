const express = require('express');
const router = express.Router();

const Cliente = require('./controllers/cliente.js');
const Hamburguer = require('./controllers/hamburguer.js');
const Pedido= require('./controllers/pedido.js');

router.get('/', (req, res) => {
    res.json({ titulo: 'Hamburgueria Exps. Patterns' });
});

router.post('/clientes',Cliente.create);
router.get('/clientes',Cliente.read);

router.post('/hamburguers',Hamburguer.create);
router.get('/hamburguers',Hamburguer.read);

router.post('/pedidos',Pedido.create);
router.get('/pedidos',Pedido.read);

module.exports = router;