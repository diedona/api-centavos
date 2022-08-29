import express, { Application } from 'express';
import { rotas } from './rotas';

export class AplicacaoCentavos {

  servidor: Application;

  constructor() {
    this.servidor = express();
    this.configurarMiddlewares();
    this.configurarRotas();
  }

  private configurarMiddlewares() {
    this.servidor.use(express.json());
  }

  private configurarRotas() {
    this.servidor.use(rotas);
  }

}