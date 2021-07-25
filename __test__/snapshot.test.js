import { getCharacter } from '../snapshot';
import rick from '../rick.json';



describe('Es hora de las instantáneas', () => {
    test('Snapshot', () => {
        expect(getCharacter(rick)).toMatchSnapshot();
    });

    test('Siempre fallará la instantánea', () => {
        const user = {
            createAt: new Date(),
            id: Math.floor(Math.random() * 20),
        }
        expect(user).toMatchSnapshot();
    });

    test('Tenemos una excepción', () => {
        const user = {
            id: Math.floor(Math.random() * 20),
            name: 'Adriana Sánchez'
        }
        expect(user).toMatchSnapshot({
            id: expect.any(Number)
        });
    });
});