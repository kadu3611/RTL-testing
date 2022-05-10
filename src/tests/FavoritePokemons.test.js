import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../components/renderWithRouter';
import FavoritePokemons from '../components/FavoritePokemons';
import App from '../App';

describe('Requisito ', () => {
  it('Testando se estou em /about', () => {
    renderWithRouter(<FavoritePokemons />);
    const favoritesTitle = screen.getByText(/No favorite pokemon found/i);
    expect(favoritesTitle).toBeInTheDocument();
  });
  it('Testando se esta favoritando os pokemons', () => {
    renderWithRouter(<App />);
    const buttonFire = screen.getByRole('button', { name: 'Fire' });
    userEvent.click(buttonFire);
    // Charmander
    const chamanderFire = screen.getByText(/Charmander/i);
    expect(chamanderFire).toBeInTheDocument();
    const more = screen.getByRole('link', {
      name: /More details/i,
    });
    userEvent.click(more);
    // Summary
    const sumary = screen.getByRole('heading', { name: /Summary/i });
    expect(sumary).toBeInTheDocument();

    // const marcarCheck = screen.getByText(/Pokémon favoritado?/i);
    // userEvent.click(marcarCheck);
    const favoritarPokemon = screen.getByText(/Pokémon favoritado?/i);
    userEvent.click(favoritarPokemon);
    const check = screen.getByRole('checkbox', { checked: true });
    // const srcImage = /star-icon.svg/i;
    // const testChecked = screen.getByRole('img');
    // expect(testChecked.src).toBe(srcImage);
    expect(check).toBeInTheDocument();
    // Agora ir para à página favorito e verificar se chamander está lá
    const favoritesLink = screen.getByRole('link', {
      name: 'Favorite Pokémons',
    });
    userEvent.click(favoritesLink);
    const chamander = screen.getByText(/Charmander/i);
    expect(chamander).toBeInTheDocument();
  });
});
