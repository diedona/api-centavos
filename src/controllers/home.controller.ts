import { Request, Response } from "express";

class HomeController {

  private mensagens = ["1 - que legal te ver por aqui!", "2 - coé menor", "3 - salve, suave?", "4 - opa blz?"];

  getHome(request: Request, respose: Response) {
    return respose.send({
      message: "bem vindo à home"
    });
  }

  getMensagem(request: Request, response: Response) {
    return response.send(this.obterMensagemAleatoria());
  }

  async getMensagemAsync(request: Request, response: Response) {
    console.log('iniciando');
    await this.wait(5000);
    return response.send(this.obterMensagemAleatoria());
  }

  private wait(milliseconds: number): Promise<void>{
    return new Promise(resolve => {
        setTimeout(resolve, milliseconds);
    });
  }

  async getErro(req: Request, res: Response) {
    throw new Error("Falha geral");
  }

  private obterMensagemAleatoria(): string {
    const numeroAleatorio = this.obterNumeroAleatorio();
    console.log(`sorteou o numero ${numeroAleatorio}`);
    return this.mensagens[numeroAleatorio];
  }

  private obterNumeroAleatorio(): number {
    return Math.floor(Math.random() * (this.mensagens.length));
  }

  postHome(request: Request, respose: Response) {
    console.log(request.body);

    return respose.send({
      message: "belo poste!"
    });
  }

}

const homeController = new HomeController();
export { homeController };