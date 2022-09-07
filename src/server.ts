import express, { Application, NextFunction, Request, Response } from 'express';
import { rotas } from './rotas';

export class AplicacaoCentavos {

  servidor: Application;

  constructor() {
    this.servidor = express();
    this.configurarMiddlewares();
    this.configurarRotas();
    this.configurarTratamentoDeErros();
  }

  private configurarMiddlewares() {
    this.servidor.use(express.json());
  }

  private configurarRotas() {
    this.servidor.use(rotas);
  }

  private configurarTratamentoDeErros(): void {
    this.servidor.use(this.tratamentoDeErros);
  }

  private tratamentoDeErros(err: Error, req: Request, res: Response, next: NextFunction) {
    console.error(err);
    res.status(500).send({ erro: 'Ocorreu um erro inesperado' });
  }

}