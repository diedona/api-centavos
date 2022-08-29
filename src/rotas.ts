import { Router } from "express";
import { homeController } from "./controllers/home.controller";

const rotas = Router();

rotas.get("/", (req, res) => homeController.getHome(req, res));               // necessário usar arrow function 
rotas.get("/home", homeController.getHome.bind(homeController));              // ou bind para ter acesso ao "this" (https://stackoverflow.com/questions/40018472/implement-express-controller-class-with-typescript)
rotas.get("/home/mensagem", (req, res) => homeController.mensagem(req, res));
rotas.post("/home", homeController.postHome.bind(homeController));

export { rotas };