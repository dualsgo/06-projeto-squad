const Funcionalidades = require('../models/Funcionalidades');

const renderPage = async (req, res) => {
    const funcionalidadeData = [];

    const users = await Funcionalidades.findAll();
    users.forEach(funcionalidade => funcionalidadeData.push(funcionalidade));
    return res.json({
        funcionalidadeData
    });
}

module.exports = { renderPage };