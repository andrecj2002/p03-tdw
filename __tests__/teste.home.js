import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // Import jest-dom matchers
import Home from "../pages/Home";


describe('Home Component', () => {
    test('renders welcome message', () => {
        render(<Home />);
        
        const messageElement = screen.getByText(/Teste xD/i);
        expect(messageElement).toBeInTheDocument();
    });
});

