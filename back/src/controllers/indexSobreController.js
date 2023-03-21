const Sobre = require('../models/Sobre');
const renderPage = async (req, res) => {
    const sobreData = [];

    const sobre = await Sobre.findAll();
    sobre.forEach(sobre => sobreData.push(sobre));
    return res.json({
        sobreData
    });
}

module.exports = { renderPage };
