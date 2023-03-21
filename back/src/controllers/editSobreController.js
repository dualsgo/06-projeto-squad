const Sobre = require('../models/Sobre');

const editSobre = async (req, res) => {
    const { comment } = req.body;

    const sobre = await Sobre.findOne({ where: { sobreId: 1 } });

    if (sobre) {
        await Sobre.update(
            { comment: comment },
            { where: { sobreId: 1 } }
        );

        console.log('Sobre updated');
        return res.status(200).json({ 'aviso': 'A atualização foi um sucesso' });
    } else {
        
        await Sobre.create({ sobreId: 1, comment: comment });

        console.log('Sobre created');
        return res.status(200).json({ 'aviso': 'A criação foi um sucesso' });
    }
};

module.exports = {
    editSobre
};