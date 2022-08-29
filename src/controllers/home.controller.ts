import { Request, Response } from "express";

class HomeController {

  private mensagens = ["1 - que legal te ver por aqui!", "2 - coé menor", "3 - salve, suave?", "4 - opa blz?"];

  getHome(request: Request, respose: Response) {
    return respose.send({
      message: "bem vindo à home"
    });
  }

  mensagem(request: Request, response: Response) {
    return response.send(this.obterMensagemAleatoria());
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