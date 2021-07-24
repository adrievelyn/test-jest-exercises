import { TestWatcher } from '@jest/core';
import {isNull, isTrue} from '../true';
import {isFalse, isUndefined} from '../true';
  
//is Null 
describe ('Probar resultados nulos', () => {
    test('null', () => {
        expect(isNull()).toBeNull();                                      
    });
});
//is True 
describe ('Probar resultados verdaderos', () => {
    test('true', () => {
        expect(isTrue()).toBeTruthy();
    });
});
//is False
describe ('Probar resultados falsos', () => {
    test('false', () => {
        expect(isFalse()).toBeFalsy();
    });
});
//is Undefined
describe ('Probar resultados indefinidos', () => {
    test('undefined', () => {
        expect(isUndefined()).toBeUndefined()
    });
});



