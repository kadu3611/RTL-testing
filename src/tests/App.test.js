import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../components/renderWithRouter';
import App from '../App';

describe('Requisito 1', () => {
  it('O primeiro link deve possuir o texto Home.'
  + 'O segundo link deve possuir o texto About.'
  + 'O terceiro link deve possuir o texto Favorite Pokémons.', () => {
    renderWithRouter(<App />);
    const homeTitle = screen.getByRole('link', {
      name: 'Home',
    });
    userEvent.tab();
    expect(homeTitle).toHaveFocus();
    expect(homeTitle).toBeInTheDocument();
    const aboutTitle = screen.getByRole('link', {
      name: 'About',
    });
    userEvent.tab();
    expect(aboutTitle).toHaveFocus();
    expect(aboutTitle).toBeInTheDocument();

    const favoriteTitle = screen.getByRole('link', {
      name: 'Favorite Pokémons',
    });
    userEvent.tab();
    expect(favoriteTitle).toHaveFocus();
    expect(favoriteTitle).toBeInTheDocument();
  });
  it('Teste se a aplicação é redirecionada para a página inicial,'
  + 'na URL / ao clicar no link Home da barra de navegação. Teste home', () => {
    const { history } = renderWithRouter(<App />);
    const { pathname } = history.location;
    const homeTitle = screen.getByRole('link', {
      name: 'Home',
    });
    userEvent.click(homeTitle);
    expect(pathname).toBe('/');
    const titleTitle = screen.getByRole('heading', {
      name: 'Encountered pokémons', level: 2,
    });
    expect(titleTitle).toBeInTheDocument();
  });
  it('Deve renderizar o componente Sobre', () => {
    const { history } = renderWithRouter(<App />);

    const aboutTitle = screen.getByRole('link', {
      name: 'About',
    });
    userEvent.click(aboutTitle);
    const { pathname } = history.location;
    // console.log(pathname);
    expect(pathname).toBe('/about');
  });
  it('Deve renderizar o componente Favorites', () => {
    const { history } = renderWithRouter(<App />);

    const favoritesTitle = screen.getByRole('link', {
      name: 'Favorite Pokémons',
    });
    userEvent.click(favoritesTitle);
    const { pathname } = history.location;
    // console.log(pathname);
    expect(pathname).toBe('/favorites');
  });
  it('Deve renderizar o componente Not Found', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/aaaa');
    const titleTitle = screen.getByRole('heading', {
      name: /Page requested not found/i,
    });
    expect(titleTitle).toBeInTheDocument();
  });
});
// Not Found Page requested not found
