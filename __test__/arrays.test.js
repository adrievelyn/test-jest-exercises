import { arrayFruits, arrayColors } from '../arrays';

//\
describe('Comprobaremos que existe un elemento', () => {
    test('¿Tiene una banana?', () => {
        expect(arrayFruits()).toContain('banana');
    });
    test('No contiene un plátano', () => {
        expect(arrayFruits()).not.toContain('plátano')
    })
    test('Comprobar el tamaño de un arreglo', () => {
        expect(arrayFruits()).toHaveLength(5);
    });
    test('Comprobaremos que existe un color', () => {
        expect(arrayColors()).toContain('azul');
    });
});


    
