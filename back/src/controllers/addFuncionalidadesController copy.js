const Funcionalidades = require('../models/Funcionalidades');

const addFuncionalidades = async (req, res) => {
    const { name, comment } = req.body;

    const funciondalidadeExist = await Funcionalidades.findOne({
        where: {
            name
        }
    });

    if (!funciondalidadeExist) {
        if (name && comment !== null) {
            const funcionalidadesCreated = await Funcionalidades.create({ name, comment });
            return res.json({ mensagem: "Funcionalidade criada com sucesso!!!" });
        }
    }

    return res.redirect("/?error=nameTaken");
};

module.exports = {
    addFuncionalidades
}