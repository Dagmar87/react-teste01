import React, { Component } from "react";
import PropTypes from "prop-types";
import Home from "./Home";

const fakeDatabase = {
  Dagmar: [
    "8h00 - Assistir as aulas de Matematica na escola",
    "12h30 - Encontrar Renata para o almoço",
    "15h00 - Encontrar Fabio no Clube de Futebol",
    "20h00 - Jantar à beira da piscina com Pedro e Lorena",
  ],
  Inaiana: [
    "8h00 - Reunião com o CREA",
    "15h00 - Encontrar Gabriel no Clube de Arquitetura",
  ],
};

class App extends Component {
  static propTypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string,
  };

  render() {
    const { isLoggedIn, username } = this.props;

    return (
      <div className="App">
        {
          isLoggedIn
            ? <Home username={username} tasks={fakeDatabase[username]} />
            : <p>Olá, visitante. Faça login para continuar.</p>
        }
      </div>      
    );
  }
}

export default App;
