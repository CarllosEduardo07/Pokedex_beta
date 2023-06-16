import { Type } from './Type';

export interface Pokemon {
  image: string;
  number: number;
  name: string;
  types: Type[];
}

export function getPokemonImage(pokemon: Pokemon) {
  return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${getPokemonNumber(pokemon)}.png`;
}

export function getPokemonNumber(pokemon: Pokemon) {
  return leadingZero(pokemon.number);
}

//colocando os 2 zeros nos numeros do pokemon
function leadingZero(str: String | number, size: number = 3): String {
  let s = String(str);
  while (s.length < (size || 2)) {
    s = '0' + s;
  }
  return s;
}
