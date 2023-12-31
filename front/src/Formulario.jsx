const Formulario = ({ botao, eventoTeclado, cadastrar, obj }) => {
  return (
    <form>
      <input type="text" value={obj.nome} name='nome' onChange={eventoTeclado} placeholder="Nome" />
      <input type="text" value={obj.marca} name='marca' onChange={eventoTeclado} placeholder="Marca" />

      {botao ? (
        <input type="button" value="Cadastrar" className="btn btn-primary" onClick={cadastrar}/>
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
