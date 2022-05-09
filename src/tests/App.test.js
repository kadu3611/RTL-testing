import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../components/renderWithRouter';
import App from '../App';

describe('Requisito 1', () => {
  it('deve renderizar o componente App, testa-lo se vai para o "/",'
+ 'e se aparece oi na tela\'', () => {
    const { history } = renderWithRouter(<App />);
    const { pathname } = history.location;

    const homeTitle = screen.getByRole('heading', {
      name: 'Oi',
    });
  });
});
