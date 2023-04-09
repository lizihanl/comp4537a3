// import React from 'react'

// function Pokemon({ pokemon }) {
//   const getThreeDigitId = (id) => {
//     if (id < 10) return `00${id}`
//     if (id < 100) return `0${id}`
//     return id
//   }

//   return (
//     <>
//       <img src={`https://github.com/fanzeyi/pokemon.json/raw/master/images/${getThreeDigitId(pokemon.id)}.png`} />
//     </>
//   )
// }

// export default Pokemon

import React, { useState } from 'react';

function Pokemon({ pokemon }) {
  const [showInfo, setShowInfo] = useState(false);
  const getThreeDigitId = (id) => {
    if (id < 10) return `00${id}`;
    if (id < 100) return `0${id}`;
    return id;
  };

  const handleOnClick = () => {
    setShowInfo(!showInfo);
  };

  return (
    <>
      <img src={`https://github.com/fanzeyi/pokemon.json/raw/master/images/${getThreeDigitId(pokemon.id)}.png`} onClick={handleOnClick} />
      {showInfo && (
        <div>
          <h2>{pokemon.name.english}</h2>
          <p>Type: {pokemon.type.join(', ')}</p>
          <p>HP: {pokemon.base.HP}</p>
          <p>Attack: {pokemon.base.Attack}</p>
          <p>Defense: {pokemon.base.Defense}</p>
          <p>Sp. Attack: {pokemon.base['Sp. Attack']}</p>
          <p>Sp. Defense: {pokemon.base['Sp. Defense']}</p>
          <p>Speed: {pokemon.base.Speed}</p>
        </div>
      )}
    </>
  );
}

export default Pokemon;
