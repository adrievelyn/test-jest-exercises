//import { TestWatcher } from '@jest/core';
import {add, multiply, substract, divide} from '../maths.js';

describe('Cálculos matemáticos', ()=>{
    //aquí crearemos nuestra primera prueba
    test('Prueba de sumas', ()=> {
        expect(add(2,1)).toBe(3); //significa que esperamos que la respuesta sea 2
    });
    test('Multiplicar',()=>{
        expect(multiply(2,2)).toBe(4);
    });
    test('Restar',()=>{
        expect(substract(5,3)).toBe(2);
    })
    test('Dividir',()=>{
        expect(divide(10,5)).toBe(2);
    })
});

//se le pasan funciones anónimas 