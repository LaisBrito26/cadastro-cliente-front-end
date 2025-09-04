import { EhMenor } from "../services/Servico1";

function RespostaEhMenor() {
  return <span>Resposta: {EhMenor(1, 2) ? "Sim" : "Nao"}</span>;
}

export default RespostaEhMenor;
