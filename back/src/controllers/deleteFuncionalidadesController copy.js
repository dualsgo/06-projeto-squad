const Funcionalidades = require("../models/Funcionalidades");

const deleteFuncionalidades = async (req, res) => {
    
    if (req.params.funcionalidadeId == undefined || req.params.funcionalidadeId == null) {
        return res.redirect("/?error=noFuncionalidaderSpecified");
        console.log("Erro na rota delete");
    };
    
    await Funcionalidades.destroy({
        where: {
            funcionalidadeId: req.params.funcionalidadeId,
        }
    });

    return res.redirect("/");
};

module.exports = { 
   deleteFuncionalidades
};