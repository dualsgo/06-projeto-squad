const Funcionalidades = require("../models/Funcionalidades");

const editFuncionalidades = async (req, res) => {
    const { name, comment } = req.body;
    
    await Funcionalidades.findOne({
        where: {
            funcionalidadeId: req.params.funcionalidadeId,
        }
    }).then((Funcionalidade) => {
         Funcionalidade.update({ name, comment });
        return res.json({ "mensagem": "Foi modificado com sucesso"});
    }).catch(() => {
        return res.redirect("/?error=invalido");
    });
}

module.exports = {
    editFuncionalidades
};