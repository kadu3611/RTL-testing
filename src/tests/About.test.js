// About Pokédex

import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../components/renderWithRouter';
import { About } from '../components';

describe('Requisito ', () => {
  it('Testando se estou em /about', () => {
    renderWithRouter(<About />);
    const aboutTitle = screen.getByText(/This application simulates a Pokédex/i);
    expect(aboutTitle).toBeInTheDocument();
  });
  it('Testando se tem um h2 com About Pokédex', () => {
    renderWithRouter(<About />);
    const infoPokedex = screen.getByRole('heading', {
      name: /About Pokédex/i, level: 2,
    });
    expect(infoPokedex).toBeInTheDocument();
  });
  it('Testando se se tem o link da imagem', () => {
    renderWithRouter(<About />);
    const link = 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png';
    const aboutTitle = screen.getByRole('img');
    // console.log(aboutTitle.src);
    expect(aboutTitle.src).toBe(link);
  });
  it('Testando se estou em paragrafos com texto', () => {
    renderWithRouter(<About />);
    const primeiroP = 'This application simulates a Pokédex,'
    + ' a digital encyclopedia containing all Pokémons';
    const segundoP = 'One can filter Pokémons by type,'
    + ' and see more details for each one of them';
    const primeiroTextP = screen.getByText(primeiroP);
    const segundoTextP = screen.getByText(segundoP);
    expect(primeiroTextP).toBeInTheDocument();
    expect(segundoTextP).toBeInTheDocument();
  });
});

/* });
userEvent.tab();
expect(aboutTitle).toHaveFocus();
expect(aboutTitle).toBeInTheDocument();

const favoriteTitle = screen.getByRole('link', {
  name: 'Favorite Pokémons',
});
userEvent.tab();
expect(favoriteTitle).toHaveFocus();
expec t(favoriteTitle).toBeInTheDocument();
}); */
