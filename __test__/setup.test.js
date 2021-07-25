//después de cada prueba
afterEach(() => console.log('despueś de cada prueba'));
afterAll(() => console.log('después de todas las pruebas'));

//antes de cada prueba
beforeEach(() => console.log('Antes de cada prueba'));
beforeAll(() => console.log('Antes de todas las pruebas'));

//Las pruebas se leen en la terminal según como este hecha cada funci;on
//No en el orden que las hagamos
describe('Preparar antes de ejecutar', () => {
    test('Es verdadero', () => {
        expect(true).toBeTruthy();
    });
});