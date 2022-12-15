import { useState } from 'react';
import { FiSearch , FiChevronsRight } from 'react-icons/fi';
import './style.css';

import api from "./services/api";

function App() {

  const [input, setInput] = useState('');
  const [cep, setCep] = useState({});

  async function handleSearch(){

    let main = document.querySelector(".main");
    // 09784055/json/
    if(input == ""){
      alert("Preencha o campo!");
      return;
    }

    try {
      const resposta = await api.get(`${input}/json`);
      setCep(resposta.data);
      main.style.display = "flex";
      setInput("");
    } 
    catch {
      alert("Erro ao buscar cep!");
      setInput("");
    }
  }

  return (
    <div className="container">
      <h1 className="title">Buscador CEP</h1>

      <div className="containerInput">
        <input type="text" placeholder="Digite seu CEP" 
        value={input} onChange={(e) => setInput(e.target.value)}/>
        <button className="btnBuscar" onClick={handleSearch}>
          <FiSearch size={25} color="fff"/>
        </button>
      </div>
      <main className='main'>
        <span>CEP: {cep.cep}</span>
        <span>Rua: {cep.logradouro}</span>
        <span>Complemento: {cep.complemento}</span>
        <span>Bairro: {cep.bairro}</span>
        <span>{cep.localidade} - {cep.uf}</span>
      </main>
      <br/>
      <p>{"< " + "Tainy Souza" + " >"} </p>
      
      

    </div>
  );
}

export default App;
