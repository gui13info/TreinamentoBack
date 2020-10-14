const Sequelize = require("sequelize");

const databaseConfig = require("../config/database");

const Endereco = require('../app/models/Endereco');

const models = [Endereco];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.model)
      );
  }
}

module.exports = new Database();