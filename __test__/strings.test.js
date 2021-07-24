describe('Cadenas de Texto', () => {
    const text = 'Un bonito texto';
    test('Debe contener el siguiente texxto', () => {
        expect(text).toMatch(/bonito/);
    });
    test('No contiene el siguiente texto', () => {
        expect(text).not.toMatch(/feo/);
    });
    test('Comprobar el tamaño del string', () => {
        expect(text).toHaveLength(15);
    });
});