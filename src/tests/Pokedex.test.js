import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../helpers/renderWithRouter';
import App from '../App';

describe('Requisito 5', () => {
  it('Teste Page not Found em um h2', () => {
    renderWithRouter(<App />);
    // Encountered pokémons

    const buttonNext = screen.getByRole('heading', {
      name: /Encountered pokémons/i, level: 2,
    });
    expect(buttonNext).toBeInTheDocument();
  });
  it('Exibido o próximo pokémon quando o botão Próximo pokémon é clicado.', () => {
    renderWithRouter(<App />);
    // Encountered pokémons

    const buttoNext = screen.getByRole('button', {
      name: /Próximo pokémon/i,
    });
    userEvent.click(buttoNext);
    const chamander = screen.getByText(/Charmander/i);
    expect(chamander).toBeInTheDocument();
    userEvent.click(buttoNext);
    const caterpie = screen.getByText(/Caterpie/i);
    expect(caterpie).toBeInTheDocument();
    // Ekans
    userEvent.click(buttoNext);
    const ekans = screen.getByText(/Ekans/i);
    expect(ekans).toBeInTheDocument();
  });
  it('Mostrar o primeiro pokemon depois de clicar no último.', () => {
    renderWithRouter(<App />);

    const buttoNext = screen.getByRole('button', {
      name: /Próximo pokémon/i,
    });
    userEvent.click(buttoNext);
    userEvent.click(buttoNext);
    userEvent.click(buttoNext);
    userEvent.click(buttoNext);
    userEvent.click(buttoNext);
    userEvent.click(buttoNext);
    userEvent.click(buttoNext);
    userEvent.click(buttoNext);
    userEvent.click(buttoNext);
    const pikachu = screen.getByText(/Pikachu/i);
    expect(pikachu).toBeInTheDocument();
  });
  it('Um botão para cada filtragem.', () => {
    renderWithRouter(<App />);
    const buttoAll = screen.getByRole('button', {
      name: 'All',
    });
    expect(buttoAll).toBeInTheDocument();

    const buttoEletric = screen.getByRole('button', {
      name: /Electric/i,
    });
    expect(buttoEletric).toBeInTheDocument();
    userEvent.click(buttoEletric);
    const pika = screen.getByText(/Pikachu/i);
    expect(pika).toBeInTheDocument();
    expect(buttoAll).toBeInTheDocument();
    screen.getAllByTestId('pokemon-type-button');

    const buttoFire = screen.getByRole('button', {
      name: /Fire/i,
    });

    expect(buttoFire).toBeInTheDocument();
    userEvent.click(buttoFire);
    const fire = screen.getByText(/Charmander/i);
    // expect(fire).toBe(firim[2]);
    expect(fire).toBeInTheDocument();
    expect(buttoAll).toBeInTheDocument();

    const buttoBug = screen.getByRole('button', {
      name: /Bug/i,
    });
    expect(buttoBug).toBeInTheDocument();
    userEvent.click(buttoBug);
    const bug = screen.getByText(/Caterpie/i);
    expect(bug).toBeInTheDocument();
    expect(buttoAll).toBeInTheDocument();

    const buttoPoison = screen.getByRole('button', {
      name: /Poison/i,
    });
    expect(buttoPoison).toBeInTheDocument();
    userEvent.click(buttoPoison);
    const poison = screen.getByText(/Ekans/i);
    expect(poison).toBeInTheDocument();
    expect(buttoAll).toBeInTheDocument();

    const buttoPsychic = screen.getByRole('button', {
      name: /Psychic/i,
    });
    expect(buttoPsychic).toBeInTheDocument();
    userEvent.click(buttoPsychic);
    const psychic = screen.getByText(/Alakazam/i);
    expect(psychic).toBeInTheDocument();
    expect(buttoAll).toBeInTheDocument();

    const buttoNormal = screen.getByRole('button', {
      name: /Normal/i,
    });
    expect(buttoNormal).toBeInTheDocument();
    userEvent.click(buttoNormal);
    const normal = screen.getByText(/Snorlax/i);
    expect(normal).toBeInTheDocument();
    expect(buttoAll).toBeInTheDocument();

    const buttoDragon = screen.getByRole('button', {
      name: /Dragon/i,
    });
    expect(buttoDragon).toBeInTheDocument();
    userEvent.click(buttoDragon);
    const dragon = screen.getByText(/Dragonair/i);
    expect(dragon).toBeInTheDocument();
  });
  it('Teste se a Pokédex contém um botão para resetar o filtro', () => {
    renderWithRouter(<App />);
    const buttoDragon = screen.getByRole('button', {
      name: /Dragon/i,
    });
    expect(buttoDragon).toBeInTheDocument();
    userEvent.click(buttoDragon);
    const dragon = screen.getByText(/Dragonair/i);
    expect(dragon).toBeInTheDocument();
    const buttoAll = screen.getByRole('button', {
      name: 'All',
    });
    userEvent.click(buttoAll);
    const pikachu = screen.getByText(/Pikachu/i);
    expect(pikachu).toBeInTheDocument();
    expect(buttoAll).toBeInTheDocument();
    const buttoNext = screen.getByRole('button', {
      name: /Próximo pokémon/i,
    });
    userEvent.click(buttoNext);
    const chamander = screen.getByText(/Charmander/i);
    expect(chamander).toBeInTheDocument();
    // expect(eletrico[0]).toBeInTheDocument();
  });
});
