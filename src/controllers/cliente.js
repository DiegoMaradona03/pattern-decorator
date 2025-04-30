const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const { decorateCliente } = require('../decorator/cliente.js');

const create = async (req, res) => {
    try {
        const cliente = await prisma.cliente.create({ data: req.body });
        res.status(201).json(decorateCliente(cliente));
    } catch (e) {
        res.status(500).json({ erro: e.message });
    }
};

const read = async (req, res) => {
    try {
        const clientes = await prisma.cliente.findMany({
            include: {
                pedidos: true
            }
        });
        const decorados = clientes.map(decorateCliente);
        res.json(decorados);
    } catch (e) {
        res.status(500).json({ erro: e.message });
    }
};

module.exports = {
    create,
    read
};