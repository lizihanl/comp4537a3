// import React from 'react'
// import axios from 'axios'
// import { useEffect } from 'react'
// import { useState } from 'react'
// import Pokemon from './Pokemon'

// function Result({ selectedTypes }) {

//   const [pokemons, setPokemons] = useState([])

//   useEffect(() => {
//     async function fetchData() {
//       const response = await axios.get('https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/pokedex.json')
//       setPokemons(response.data)
//     }
//     fetchData()
//   }, [])

//   const filteredPokemons = pokemons.filter(pokemon => pokemon.id);

//   return (
//     <div>
//       {filteredPokemons.map(pokemon => {
//         if (selectedTypes.length === 0) {
//           return null;
//         } else if (selectedTypes.every(type => pokemon.type.includes(type))) {
//           return <Pokemon key={pokemon.id} pokemon={pokemon} />;
//         }
//         return null;
//       })}
//     </div>
//   );


//   // return (
//   //   <div>
//   //     {
//   //       pokemons.map(pokemon => {
//   //         if (selectedTypes.length === 0) {
//   //           return (
//   //             <>
//   //             </>
//   //           )
//   //         } else
//   //           if (selectedTypes.every(type => pokemon.type.includes(type))) {
//   //             return (
//   //               <>
//   //                 <Pokemon id={pokemon.id} />
//   //                 <br />
//   //               </>
//   //               // <>
//   //               //   {pokemon.name.english}
//   //               //   <br />
//   //               // </>
//   //             )
//   //           }
//   //       })
//   //     }
//   //   </div>
//   // )
// }

// export default Result


import React, { useState, useEffect } from 'react';
import axios from 'axios';
//import Pokemon from './Pokemon';
import Page from './Page';
import Pagination from './Pagination';

function Result({ selectedTypes }) {
  const [pokemons, setPokemons] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get('https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/pokedex.json');
      setPokemons(response.data);
    }
    fetchData();
  }, []);

  const filteredPokemons = pokemons.filter(pokemon => pokemon.id);
  const filteredPokemonsByTypes = filteredPokemons.filter(pokemon =>
    selectedTypes.length === 0 || selectedTypes.every(type => pokemon.type.includes(type))
  );
  const itemsPerPage = 10;
  const totalItems = filteredPokemonsByTypes.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentPokemons = filteredPokemonsByTypes.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div>
      
      <Page currentPokemons={currentPokemons} currentPage={currentPage} />
      <Pagination
        numberOfPages={totalPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

export default Result;
