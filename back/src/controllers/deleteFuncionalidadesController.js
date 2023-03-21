const Funcionalidades = require("../models/Funcionalidades");

const deleteFuncionalidades = async (req, res) => {
    
    if (req.body.funcionalidadeId == undefined || req.body.funcionalidadeId == null) {
        return res.redirect("/?error=noUserSpecified");
    };
    
    await Funcionalidades.destroy({
        where: {
            funcionalidadeId: req.body.funcionalidadeId,
        }
    });

    return res.redirect("/");
};

module.exports = { 
   deleteFuncionalidades
};