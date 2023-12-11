import { useEffect, useState } from "react";
import "./App.css";
import Formulario from "./Formulario";
import Tabela from "./Tabela";

function App() {
  // Objeto produto
  const produto = {
    codigo: 0,
    nome: "",
    marca: "",
  };

  const [btnCadastrar, setBtnCadastrar] = useState(true);
  const [produtos, setProdutos] = useState([]);
  const [objProduto, setObjProduto] = useState(produto);

  //use effect
  useEffect(() => {
    fetch("http://localhost:8080/listar")
      .then((retorno) => retorno.json())
      .then((retorno_convertido) => setProdutos(retorno_convertido));
  }, []);

  //Obtendo dados do formulario
  const aoDigitar = (e) => {
    setObjProduto({ ...objProduto, [e.target.name]: e.target.value });
  };

  //cadastrar produto
  const cadastrar = () => {
    fetch("http://localhost:8080/cadastrar", {
      method: "POST",
      body: JSON.stringify(objProduto),
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
    })
      .then((retorno) => retorno.json())
      .then((retorno_convertido) => {
        if(retorno_convertido.mensagem !== undefined){
          alert(retorno_convertido.mensagem);
        } else {
          setProdutos([...produtos, retorno_convertido])
          alert("Produto cadastrado com sucesso!")
          limparFormulario();
        }
      });
  };

  //limpar formulario
  const limparFormulario = () => {
    setObjProduto(produto)
  }
  return (
    <>
      <Formulario
        botao={btnCadastrar}
        eventoTeclado={aoDigitar}
        cadastrar={cadastrar}
        obj={objProduto}
      />
      <Tabela vetor={produtos} />
    </>
  );
}

export default App;
