const express = require("express");

const InfoController = require("./app/controllers/InfoController");
const EnderecoController = require("./app/controllers/EnderecoController");
const UsuarioController = require("./app/controllers/UsuarioController");
const SessionController = require("./app/controllers/SessionController");

const authMiddleware = require("./app/middlewares/auth");

const routes = express.Router();

routes.get("/", InfoController.index);

routes.post("/enderecos", EnderecoController.store);
routes.get("/enderecos/:id", EnderecoController.show);
routes.put("/enderecos/:id", EnderecoController.update);

routes.post("/usuarios", UsuarioController.store);
routes.get("/usuarios/:id", UsuarioController.show);
routes.get("/usuarios/", UsuarioController.index);

routes.post("/sessions", SessionController.store);

routes.use(authMiddleware);

routes.get("/enderecos", EnderecoController.index);

module.exports = routes;
