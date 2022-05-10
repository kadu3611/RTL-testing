// pokemon-name

import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../helpers/renderWithRouter';
import App from '../App';

describe('Requisito 6 ', () => {
  it('Testando se é o nome correto', () => {
    renderWithRouter(<App />);

    const buttoEletric = screen.getByRole('button', {
      name: /Electric/i,
    });
    userEvent.click(buttoEletric);
    const aboutTitle = screen.getByTestId('pokemon-name');
    const tipoTitle = screen.getByTestId('pokemon-type');
    const pesoTitle = screen.getByTestId('pokemon-weight');
    const imagemEletric = screen.getByRole('img');
    // console.log(pesoTitle.innerHTML);
    // pokemon-type-button
    expect(imagemEletric.alt).toBe(`${aboutTitle.innerHTML} sprite`);
    expect(imagemEletric.src).toBe('https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png');
    expect(pesoTitle.innerHTML).toBe('Average weight: 6.0 kg');
    expect(aboutTitle.innerHTML).toBe('Pikachu');
    expect(tipoTitle.innerHTML).toBe('Electric');
  });
  it('Teste se o card do pokémon indicado na Pokédex contém um link de navegação', () => {
    const { history } = renderWithRouter(<App />);

    const buttoEletric = screen.getByRole('button', {
      name: /Electric/i,
    });
    userEvent.click(buttoEletric);
    const moreTitle = screen.getByRole('link', {
      name: 'More details',
    });
    const link = (moreTitle.href);
    userEvent.click(moreTitle);
    const { location } = history;
    const { pathname } = location;
    // console.log(history);
    expect(`http://localhost${pathname}`).toBe(link);
    const pikaTitle = screen.getByRole('heading', {
      name: 'Pikachu Details', level: 2,
    });
    expect(pikaTitle).toBeInTheDocument();
  });
  it('Teste se existe um ícone de estrela nos pokémons favoritados', () => {
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
    const favoritarPokemon = screen.getByText(/Pokémon favoritado?/i);
    userEvent.click(favoritarPokemon);
    const check = screen.getByRole('checkbox', { checked: true });
    expect(check).toBeInTheDocument();
    // Agora ir para à página favorito e verificar se chamander está lá
    const favoritesLink = screen.getByRole('link', {
      name: 'Favorite Pokémons',
    });
    userEvent.click(favoritesLink);
    const moreTitle = screen.getByRole('img',
      { name: 'Charmander is marked as favorite' });
    // console.log(moreTitle.src);
    expect(moreTitle.src).toBe('http://localhost/star-icon.svg');
    const aboutTitle = screen.getByTestId('pokemon-name');
    const name = aboutTitle.innerHTML;
    const nameChamander = screen.getByRole('img',
      { name: `${name} is marked as favorite` });
    expect(nameChamander).toBeInTheDocument();
  });
});
