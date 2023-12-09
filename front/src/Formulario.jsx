const Formulario = () => {
  return (
    <form>
      <input type="text" placeholder="Nome" />
      <input type="text" placeholder="Marca" />

      <input type="button" value="Cadastrar" className="btn btn-primary" />
      <input type="button" value="Alterar" className="btn btn-warning" />
      <input type="button" value="Remover" className="btn btn-danger" />
      <input type="button" value="Cancelar" className="btn btn-secondary" />
    </form>
  );
};

export default Formulario;
