import React, { Component } from 'react'

export default class Saudacao extends Component {

  state = {
    tipo: "Fala",
    nome: "Pedro"
  }

  // o state do objeto tem a verdade absoluta, o dado que está dentro do estado é que vai renderizar o componente
  setTipo(e) {
    let i = 1
    setInterval(() => {
      this.setState({ tipo: ++i })
    }, 1000);
    this.setState({ tipo: e.target.value })
    //this.props.tipo = e.target.value
  }

  render() {
    const { tipo, nome } = this.state
    return (
      <div>
        <h1> {tipo} {nome}!</h1>
        <hr />
        <input type="text" placeholder="Tipo..." value={tipo} onChange={e => this.setTipo(e)} />
        <input type="text" placeholder="Nome..." value={nome} />
      </div>
    )
  }
}