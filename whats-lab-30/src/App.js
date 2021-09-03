import React from "react";

import styled from "styled-components"

const AppContainer = styled.div`
  border: 1px solid black;
  height: 100vh;
  width: 600px;
  box-sizing: border-box;
  margin: auto;
  display: flex;
  flex-direction: column;

`

const MessagesContainer = styled.div`
  flex-grow: 1;
  padding: 10px;
  display: flex;
  flex-direction: column-reverse;
`

const InputContainer = styled.div`
  display: flex;
`

const NameInput = styled.input`
  width: 100px;
`

const MessageInput = styled.input`
  flex-grow: 1;
`






class App extends React.Component {
  state = {
    messages: [],
    userValue: '',
    messageValue: ''

  }

  onChangeUserValue = (event) => {
    this.setState({ userValue: event.target.value })
  }

  onChangeMessageValue = (event) => {
    this.setState({ messageValue: event.target.value })
  }

  sendMessage = () => {
    const newMessage = {
      user: this.state.userValue,
      text: this.state.messageValue
    }

    const newMessageArray = [newMessage, ... this.state.messages]
    this.setState({ messages: newMessageArray, messageValue: '' })

  }

  render() {
    return (
      <AppContainer>
        <MessagesContainer>
          {this.state.messages.map((message, index) => {
            return <p key={index}>
              <strong>{message.user}</strong>:{message.text}
            </p>

          })}

        </MessagesContainer>
        <InputContainer>
          <NameInput
            onChange={this.onChangeUserValue}
            value={this.state.userValue}
            placeholder={'Nome'}
          />

          <MessageInput
            onChange={this.onChangeMessageValue}
            value={this.state.messageValue}
            placeholder={'Mensagem'}
          />

          <button onClick={this.sendMessage}>Enviar</button>

        </InputContainer>

      </AppContainer>
    )
  }



}

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
