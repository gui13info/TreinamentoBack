const { Sequelize, Model } = require("sequelize");
const bcrypt = require("bcryptjs");

class Usuario extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: Sequelize.STRING,
        endereco_id: Sequelize.INTEGER,
        matricula: Sequelize.STRING,
        senha: Sequelize.VIRTUAL,
        senha_hash: Sequelize.STRING,
        periodo: Sequelize.STRING,
        email: Sequelize.STRING,
        telefone: Sequelize.STRING,
        admin: Sequelize.BOOLEAN,
      },
      {
        sequelize,
        tableName: "usuarios",
      }
    );

    this.addHook("beforeSave", async (usuario) => {
      if (usuario.senha) {
        usuario.senha_hash = await bcrypt.hash(usuario.senha, 8);
      }
    });

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Endereco, {
      as: "endereco",
      foreignKey: "endereco_id",
    });
  }

  checarSenha(senha) {
    return bcrypt.compare(senha, this.senha_hash);
  }
}

module.exports = Usuario;
