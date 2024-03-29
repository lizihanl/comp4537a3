import React, { useEffect, useState } from 'react';
//import Page from './Page';
//import Pagination from './Pagination';
import axios from 'axios';
import Search from './Search';
import Result from './Result';
import Login from './login';
import AdminPage from './AdminPage';

function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [pokemons, setPokemons] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);

  // const [currentPage, setCurrentPage] = useState(1);
  //const [pokemonsPerPage] = useState(10);


  useEffect(() => {
    axios
      .get('https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/pokedex.json')
      .then((res) => res.data)
      .then((res) => {
        setPokemons(res);
      })
      .catch((err) => console.log('err', err));
  }, []);

  //const indexOfLastRecord = currentPage * pokemonsPerPage;
  //const indexOfFirstRecord = indexOfLastRecord - pokemonsPerPage;
  //const currentPokemons = pokemons.slice(indexOfFirstRecord, indexOfLastRecord);
  //const numberOfPages = Math.ceil(pokemons.length / pokemonsPerPage);

  const handleLogin = (user) => {
    setLoggedInUser(user);
    setIsAdmin(user.username === 'admin');
  };

  const handleLogout = () => {
    setLoggedInUser(null);
    setIsAdmin(false);
  };


  return (
    <>{isAdmin ? (
      <>
        <div id="logout-button-container">
             <button id="logoutbutton" onClick={handleLogout}>Logout</button>
        </div>
        <AdminPage />
      </>
    ) : loggedInUser ? (
      //{loggedInUser ? (
        <>
          <div id="logout-button-container">
             <button id="logoutbutton" onClick={handleLogout}>Logout</button>
          </div><br />
          <Search selectedTypes={selectedTypes} setSelectedTypes={setSelectedTypes} />
          <Result selectedTypes={selectedTypes} />
          {/* <Page currentPokemons={currentPokemons} currentPage={currentPage} />
          <Pagination
            numberOfPages={numberOfPages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          /> */}
        </>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </>
  );
}

export default App;
