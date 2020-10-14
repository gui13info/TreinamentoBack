const Endereco = require('../models/Endereco');

class EnderecoController{
    async store(req, res){
        const { nome, numero, bairro, cidade, uf, cep } = req.body;
        // console.log(nome);

        const endereco = await Endereco.create({ 
            nome, 
            numero, 
            bairro, 
            cidade, 
            uf, 
            cep, 
        });

        // console.log(nome);

        return res.status(200).json(endereco);
    }
}

module.exports = new EnderecoController();