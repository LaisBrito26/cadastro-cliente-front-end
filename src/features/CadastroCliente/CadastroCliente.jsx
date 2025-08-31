import "./CadastroCliente.css";

const CadastroCliente = () => {
  return (
    <>
      <form className="form-cadastro-cliente">
        <fieldset>
          <legend>
            <b>Formulário de Clientes</b>
          </legend>
          <div className="linha-formulario">
            <label for="nome">Nome: </label>
            <input name="nome"></input>
          </div>
          <div className="linha-formulario">
            <label for="email">Email: </label>
            <input name="email"></input>
          </div>
          <div className="linha-formulario">
            <label for="telefone">Telefone: </label>
            <input name="telefone"></input>
          </div>
        </fieldset>
      </form>
      <button className="botao-confirmar">Cadastrar</button>
    </>
  );
};

export default CadastroCliente;
