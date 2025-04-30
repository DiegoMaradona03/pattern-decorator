const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const { decoratePedido } = require('../decorator/pedido.js');

const create = async (req, res) => {
    try {
        const { clienteId, hamburguerId, quantidade } = req.body;

        const hamburguer = await prisma.hamburguer.findUnique({
            where: { id: hamburguerId }
        });

        if (!hamburguer) {
            return res.status(404).json({ erro: 'Hamburguer não encontrado' });
        }

        const precoUnitario = hamburguer.preco;
        const subtotal = precoUnitario * quantidade;

        const novoPedido = await prisma.pedido.create({
            data: {
                clienteId,
                hamburguerId,
                quantidade,
                precoUnitario,
                subtotal
            },
            include: {
                cliente: true,
                hamburguer: true
            }
        });

        res.status(201).json(decoratePedido(novoPedido));
    } catch (e) {
        res.status(500).json({ erro: e.message });
    }
};

const read = async (req, res) => {
    try {
        const pedidos = await prisma.pedido.findMany({
            include: {
                cliente: true,
                hamburguer: true
            }
        });
        const decorados = pedidos.map(decoratePedido);
        res.json(decorados);
    } catch (e) {
        res.status(500).json({ erro: e.message });
    }
};

module.exports = {
    create,
    read
};