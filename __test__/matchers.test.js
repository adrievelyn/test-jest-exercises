// hacemos nuestro descriptivo, en este caso vamos a comparar los comparadores comunes
//le pasamos esa función anónima, como arrow function y creamos dos objetos que usaremos para comparar
//Para luego crear nuestro test

import { TestWatcher } from "@jest/core"

//toEqual()
describe('Comparadores comunes',() => {
    const user = {
        name: 'Adriana',
        lastName: 'Sánchez'
    }
    const user2 = {
        name: 'Enrique',
        lastName: 'Fermín'
    }
    test('igualdad de elementos',() => {
        expect(user).toEqual(user2);
    });
});

//not.toEqual()
describe('Comparadores comunes',() => {
    const user3 = {
        name: 'Adriana',
        lastName: 'Sánchez'
    }
    const user4 = {
        name: 'Adriana',
        lastName: 'Sánchez'
    }
    test('igualdad de elementos',() => {
        expect(user3).not.toEqual(user4);
    });
});

//toEqual()
describe('Comparadores comunes',() => {
    const user5 = {
        name: 'Adriana',
        lastName: 'Sánchez'
    }
    const user6 = {
        name: 'Adriana',
        lastName: 'Sánchez'
    }
    test('igualdad de elementos',() => {
        expect(user5).toEqual(user6);
    });
});


//not.toEqual()
describe('Comparadores comunes',() => {
    const user7= {
        name: 'Adriana',
        lastName: 'Sánchez'
    }
    const user8 = {
        name: 'Enrique',
        lastName: 'Fermín'
    }
    test('igualdad de elementos',() => {
        expect(user7).not.toEqual(user8);
    });
});
