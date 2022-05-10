// Page requested not found 😭
import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../helpers/renderWithRouter';
import { NotFound } from '../components';

describe('Requisito 4', () => {
  it('Teste Page not Found em um h2', () => {
    renderWithRouter(<NotFound />);
    const titleTitle = screen.getByRole('heading', {
      name: 'Page requested not found Crying emoji', level: 2,
    });
    const title = screen.getByText('😭');
    // const emoji = screen.getByRole('img');
    expect(title).toBeInTheDocument();
    expect(titleTitle).toBeInTheDocument();
  });
  it('Teste link do gif da página', () => {
    renderWithRouter(<NotFound />);
    const link = 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif';
    const altText = 'Pikachu crying because the page requested was not found';
    const gif = screen.getByAltText(altText);
    expect(gif.src).toBe(link);
  });
});
