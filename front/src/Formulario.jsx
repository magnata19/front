const Formulario = ({ botao, eventoTeclado }) => {
  return (
    <form>
      <input type="text" name='nome' onChange={eventoTeclado} placeholder="Nome" />
      <input type="text" name='marca' onChange={eventoTeclado} placeholder="Marca" />

      {botao ? (
        <input type="button" value="Cadastrar" className="btn btn-primary" />
      ) : (
        <div>
          <input type="button" value="Alterar" className="btn btn-warning" />
          <input type="button" value="Remover" className="btn btn-danger" />
          <input type="button" value="Cancelar" className="btn btn-secondary" />
        </div>
      )}
    </form>
  );
};

export default Formulario;
