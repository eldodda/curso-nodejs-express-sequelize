const database = require('../models');

class PessoaController {
  static async pegaTodas(req, res) {
    try {
      const listeDePessoas = await database.Pessoa.findAll();
      return res
        .status(200)
        .json(listeDePessoas);
    } catch (erro) {
      //  tratamento de erro
    }
  }
}

module.exports = PessoaController;