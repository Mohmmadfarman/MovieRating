import { useEffect, useState } from 'react';
import React from 'react';
import Logo from './Logo';
import Nav from './Nav';
import Box from './Box';
import No from './No';

function App() {
  const [data, setData] = useState('');
  const [input, setInput] = useState('');
  const [hasSearched, setHasSearched] = useState(false); // Track if user has searched

  const APIKey = '554fb2d6';

  const movie = async function (input) {
    try {
      let response = await fetch(`https://www.omdbapi.com/?apikey=${APIKey}&t=${input}`);
      if (response.ok) {
        const get = await response.json();
        console.log(get);
        if (get.Response === "False") {
          setData({ Response: "False" }); // Set data as movie not found
        } else {
          setData(get); // Set data to the fetched movie
        }
      } else {
        alert('Something went wrong with the API request.');
      }
    } catch (error) {
      console.error('Error fetching movie data:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  function getData(data) {
    setInput(data);
    setHasSearched(true); // User has initiated a search
  }

  useEffect(() => {
    if (hasSearched) {
      if (input) {
        movie(input);
      }
    }
  }, [input, hasSearched]);

  return (
    <div className='bg-black'>
      <Logo />
      <Nav getdata={getData} />
      {
        !input && hasSearched ? (
          <div className="text-white text-center">
            <h1>Please enter a movie name</h1>
          </div>
        ) : (
          data.Response === "False" ? (
            <div className="text-white text-center p-10">
              <h1>Movie not found</h1>
            </div>
          ) : (
            data.Response === "True" ? <Box data={data} /> : <No />
          )
        )
      }
    </div>
  );
}

export default App;
