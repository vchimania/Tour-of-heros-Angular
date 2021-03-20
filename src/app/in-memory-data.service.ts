import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      {
        id: 0,
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png',
        name: 'Bulbasaur',
        desc:
          'There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.',
      },
      {
        id: 1,
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png',
        name: 'Charmander',
        desc:
          'It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.',
      },
      {
        id: 2,
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png',
        name: 'Squirtle',
        desc:
          'When it retracts its long neck into its shell, it squirts out water with vigorous force.',
      },
      {
        id: 3,
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/010.png',
        name: 'Caterpie',
        desc:
          'For protection, it releases a horrible stench from the antenna on its head to drive away enemies.',
      },
      {
        id: 4,
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png',
        name: 'Pidgey',
        desc:
          'Very docile. If attacked, it will often kick up sand to protect itself rather than fight back.',
      },
      {
        id: 5,
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/019.png',
        name: 'Rattata',
        desc:
          'Will chew on anything with its fangs. If you see one, you can be certain that 40 more live in the area.',
      },
      {
        id: 6,
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/023.png',
        name: 'Ekans',
        desc:
          'The older it gets, the longer it grows. At night, it wraps its long body around tree branches to rest.',
      },
      {
        id: 7,
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png',
        name: 'Pikachu',
        desc:
          'Pikachu that can generate powerful electricity have cheek sacs that are extra soft and super stretchy.',
      },
      {
        id: 8,
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/034.png',
        name: 'Nidoking',
        desc:
          'When it goes on a rampage, its impossible to control. But in the presence of a Nidoqueen its lived with for a long time, Nidoking calms down.',
      },
      {
        id: 9,
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/038.png',
        name: 'Ninetales',
        desc:
          'It is said to live 1,000 years, and each of its tails is loaded with supernatural powers.',
      },
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
