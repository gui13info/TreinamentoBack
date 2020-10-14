const { Sequelize, Model } = require('sequelize');

class Endereco extends Model{
    static init(sequelize){
        super.init(
        {
            nome: Sequelize.STRING,
            numero: Sequelize.STRING,
            bairro: Sequelize.STRING,
            cidade: Sequelize.STRING,
            uf: Sequelize.STRING,
            cep: Sequelize.STRING,
        },
        {
            sequelize,
            tableName: "enderecos"
        }
    );
        return this;
    }
}

module.exports = Endereco;