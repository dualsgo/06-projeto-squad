const Funcionalidades = require("../models/Funcionalidades");

const editFuncionalidades = async (req, res) => {
    const { funcionalidadeId, name, comment } = req.body;

    Funcionalidades.findOne({
        where: {
            funcionalidadeId: req.body.funcionalidadeId,
        }
    }).then((Funcionalidade) => {
        Funcionalidade.update({ name, comment });
        return res.redirect("/");
    }).catch(() => {
        return res.redirect("/?error=invalid");
    });
}

module.exports = {
    editFuncionalidades
};