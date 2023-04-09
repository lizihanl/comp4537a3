import React from 'react';

function PokemonDetails({ pokemon }) {
  return (
    <div>
      <h2>{pokemon.name.english}</h2>
      <img src={`https://github.com/fanzeyi/pokemon.json/raw/master/images/${pokemon.id.toString().padStart(3, '0')}.png`} alt={pokemon.name.english} />
      <p>Type: {pokemon.type.join(', ')}</p>
      <p>HP: {pokemon.base.HP}</p>
      <p>Attack: {pokemon.base.Attack}</p>
      <p>Defense: {pokemon.base.Defense}</p>
      <p>Sp. Attack: {pokemon.base['Sp. Attack']}</p>
      <p>Sp. Defense: {pokemon.base['Sp. Defense']}</p>
      <p>Speed: {pokemon.base.Speed}</p>
    </div>
  );
}

export default PokemonDetails;