import React from 'react';
import App from './App';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Home from './Home';

it("deve renderizar a página inicial para o usuario não logado", () => {
    const props = {
        isLoggedIn: false,
        username: null
    }

    const app = mount(<App {...props} />)

    expect(app.find(Home)).toHaveLength(0)
    expect(app.find('p').at(0).text()).toEqual("Olá, visitante. Faça login para continuar.")
})

it("deve renderizar a página inicial para o usuario logado (Dagmar)", () => {
    const props = {
        isLoggedIn: true,
        username: "Dagmar"
    }

    const app = mount(<App {...props} />)

    expect(app.find(Home)).toHaveLength(1)
    expect(app.find('p').at(0).text()).toEqual("Bem-vindo, Dagmar!")

    expect(app.find('li')).toHaveLength(4)
    expect(app.find('li').at(0).text()).toEqual("8h00 - Assistir as aulas de Matematica na escola")
    expect(app.find('li').at(1).text()).toEqual("12h30 - Encontrar Renata para o almoço")
    expect(app.find('li').at(2).text()).toEqual("15h00 - Encontrar Fabio no Clube de Futebol")
    expect(app.find('li').at(3).text()).toEqual("20h00 - Jantar à beira da piscina com Pedro e Lorena")
})

it("deve renderizar a página inicial para o usuario logado sem tarefas", () => {
    const props = {
        isLoggedIn: true,
        username: "Divaldo"
    }

    const app = mount(<App {...props} />)

    expect(app.find(Home)).toHaveLength(1)
    expect(app.find('p').at(0).text()).toEqual("Bem-vindo, Divaldo!")

    expect(app.find('li')).toHaveLength(0)
})