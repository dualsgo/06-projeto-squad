const User = require("../models/User");

const addUser = async (req, res) => {
  const { firstName, lastName, email, number } = req.body;

  const userExist = await User.findOne({
    where: {
      email,
    },
  });

  if (!userExist) {
    if (firstName && lastName && email && number !== null) {
      const userCreated = await User.create({
        firstName,
        lastName,
        email,
        number,
      });
      return res.json("Usuário criado com sucesso!!!");
    }
  }

  return res.redirect("/?error=emailTaken");
};

module.exports = {
  addUser,
};
