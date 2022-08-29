import * as dotenv from 'dotenv';
import { AplicacaoCentavos } from './server';

dotenv.config();

const aplicacao = new AplicacaoCentavos();
const porta = process.env.PORT || 3000;

aplicacao.servidor.listen(porta, () => {
  console.log(`rodando em https://localhost:${porta}`);
});