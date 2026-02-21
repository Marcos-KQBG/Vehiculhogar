import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Search from '../search';
import { ThemeProvider } from '../../ThemeContext';

jest.mock('expo-router', () => ({
    useRouter: () => ({ push: jest.fn() }),
}));

describe('Test del fichero search,', () => {

    test('Renderiza el input y al menos una card', () => {
        const { getByPlaceholderText, getByText } = render(<Search />, { wrapper: ThemeProvider });
        const input = getByPlaceholderText('Buscar por modelo o matrícula...');
        expect(input).toBeTruthy();
        // debería mostrar al menos el modelo 'Audi TT' 
        expect(getByText('Audi TT')).toBeTruthy();
    });

    test('Filtra por modelo cuando se escribe en el input', () => {
        const { getByPlaceholderText, queryByText } = render(<Search />, { wrapper: ThemeProvider });
        const input = getByPlaceholderText('Buscar por modelo o matrícula...');

        // Busca un modelo que existe
        fireEvent.changeText(input, 'Tesla');
        expect(queryByText('Tesla Model 3')).toBeTruthy();

        // Busca por matrícula exacta
        fireEvent.changeText(input, 'ABC-123');
        expect(queryByText('Audi TT')).toBeTruthy();

        // Busca un término que no existe
        fireEvent.changeText(input, 'no-existe-xyz');
        expect(queryByText('Audi TT')).toBeNull();
    });
});