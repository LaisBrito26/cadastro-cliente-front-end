import { EhMaior, EhMenor } from "../services/Servico1";

const RespostaEhMaior = () => {
  return <span>Resposta: {EhMaior(1, 2) ? "Sim" : "Nao"}</span>;
};

export default RespostaEhMaior;
