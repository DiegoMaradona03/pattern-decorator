const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const { decorateHamburguer } = require('../decorator/hamburguer.js');

const create = async (req, res) => {
    try {
        const hamburguer = await prisma.hamburguer.create({ data: req.body });
        res.status(201).json(decorateHamburguer(hamburguer));
    } catch (e) {
        res.status(500).json({ erro: e.message });
    }
};

const read = async (req, res) => {
    try {
        const hamburguers = await prisma.hamburguer.findMany({
            include: {
                pedidos: true
            }
        });
        const decorados = hamburguers.map(decorateHamburguer);
        res.json(decorados);
    } catch (e) {
        res.status(500).json({ erro: e.message });
    }
};

module.exports = {
    create,
    read
};