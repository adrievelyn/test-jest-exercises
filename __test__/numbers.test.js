import { numbers } from '../numbers';

//se puede crear la prueba sin necesidad de usar decsribe, pero igual para tenerlo bien organizado 
//es buena práctica usar el describe

//PASS AND FAILED
//toBeGreaterThan FALSE
/*describe('Comparación de números', () => {
    test('Mayor que', () => {
        expect(numbers(8,6)).toBeGreaterThan(15);
    });
//toBeGreaterThanOrEqual TRUE
    test('Mayor o Igual que', () => {
        expect(numbers(3,6)).toBeGreaterThanOrEqual(9);
    });
//toBeLessThan FALSE
    test('Menor que', () => {
        expect(numbers(7,2)).toBeLessThan(8);
    });
//toBeLessThanOrEqual TRUE
    test('Menor o igual que', () => {
    expect(numbers(5,1)).toBeLessThanOrEqual(6);
    });
//toBeCloseTo TRUE
    test('Números Flotantes', () => {
    expect(numbers(0.9,0.2)).toBeCloseTo(1.1);
    });
});*/


//ALL PASS - ALL TRUE
//toBeGreaterThan 
describe('Comparación de números', () => {
    test('Mayor que', () => {
        expect(numbers(8,6)).toBeGreaterThan(10);
    });
//toBeGreaterThanOrEqual 
    test('Mayor o Igual que', () => {
        expect(numbers(3,6)).toBeGreaterThanOrEqual(9);
    });
//toBeLessThan 
    test('Menor que', () => {
        expect(numbers(7,2)).toBeLessThan(15);
    });
//toBeLessThanOrEqual 
    test('Menor o igual que', () => {
    expect(numbers(5,1)).toBeLessThanOrEqual(6);
    });
//toBeCloseTo 
    test('Se acerca a', () => {
    expect(numbers(0.9,0.2)).toBeCloseTo(1.1)
    });
});                      


