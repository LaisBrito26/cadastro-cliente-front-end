import "./CadastroCliente.css";
import { useState } from "react";

const CadastroCliente = () => {
  const [clientes, setClientes] = useState([]);
  const [form, setForm] = useState({
    nome: "",
    genero: "",
    email: "",
    telefone: "",
    cidade: "",
  });

  // Atualiza valores do formulário
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Salva cliente na lista
  const handleSubmit = (e) => {
    e.preventDefault();
    setClientes([...clientes, form]); // adiciona novo cliente
    setForm({ nome: "", genero: "", email: "", telefone: "", cidade: "" }); // limpa o form
  };

  return (
    <>
      <form className="form-cadastro-cliente">
        <fieldset className="linha-formulario-titulo">
          <legend className="cabecalho">
            <b>Cadastro de Clientes</b>
          </legend>
          <br></br>
          <div className="linha-formulario">
            <label for="nome">Nome Completo: </label>
            <input type="text" name="nome" id="nome" class="inputUser" placeholder="Digite seu nome" required></input>
          </div>

          <div className="sexo">
            <p>Sexo:</p>
            <input type="radio" id="feminino" name="genero" class="inputUser" value="feminino" required/>
            <label for="feminino">Feminino</label>
            <br></br>
            <input type="radio" id="masculino" name="genero" value="masculino" required/>
            <label for="masculino">Masculino</label>
            <br></br>
            <input type="radio" id="outros" name="genero" value="outros" required/>
            <label for="outros">Outros</label>
          </div>
          <br></br>
          <div className="linha-formulario">
            <label for="email">Email: </label>
            <input type="email" name="email" id="email" class="inputUser" placeholder="Digite seu email"></input>
          </div>
          <div className="linha-formulario">
            <label for="telefone">Telefone: </label>
            <input type="tel" name="telefone" id="telefone" class="inputUser" placeholder="Digite seu telefone"></input>
          </div>
          <div className="linha-formulario">
            <label for="cidade">Cidade: </label>
            <input type="cidade" name="cidade" id="cidade" class="inputUser" placeholder="Digite sua cidade"></input>
          </div>
          <button type="submit" name="submit" className="botao-confirmar"><b>Cadastrar</b></button>
        </fieldset>
      </form>
    </>
  );
};

export default CadastroCliente;

