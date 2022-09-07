import * as dotenv from 'dotenv';
import { AplicacaoCentavos } from './server';

dotenv.config();

const aplicacao = new AplicacaoCentavos();
const porta = process.env.PORT || 3000;

aplicacao.servidor.listen(porta, () => {
  console.log(`rodando em https://localhost:${porta}`);
});

// debug
// let startTime: number;
// setInterval(function() {
//     if (!startTime) {
//         startTime = Date.now();
//     }
//     console.log((Date.now() - startTime) / 1000);
// }, 100)