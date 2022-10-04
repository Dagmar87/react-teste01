import React from 'react';
import App from './App';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';

it("deve renderizar a página inicial para o usuario não logado", () => {
    const props = {
        isLoggedIn: false,
        username: null
    }

    const app = mount(<App {...props} />)

    expect(toJson(app)).toMatchSnapshot()
})

it("deve renderizar a página inicial para o usuario logado (Dagmar)", () => {
    const props = {
        isLoggedIn: true,
        username: "Dagmar"
    }

    const app = mount(<App {...props} />)

    expect(toJson(app)).toMatchSnapshot()
})

it("deve renderizar a página inicial para o usuario logado sem tarefas", () => {
    const props = {
        isLoggedIn: true,
        username: "Divaldo"
    }

    const app = mount(<App {...props} />)

    expect(toJson(app)).toMatchSnapshot()
})