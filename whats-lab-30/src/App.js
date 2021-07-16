import React from "react";
import "./App.css";
import "./components/Components"
import styled from "styled-components";



function App() {

  return <form>
    <input type="text"
    nome="Usuario"
    placeholder="Usuário"
    />
    <input type="text"
    nome="Mensagem"
    placeholder="Mensagem"
    />
    <button type="submit">Enviar</button>
  </form>
}

export default App;
