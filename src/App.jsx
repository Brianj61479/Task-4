/** @format */

import React from "react";
import { useState, useEffect } from "react";
import Movies from "./components/Movies";
import SearchBar from "./components/SearchBar";

function App() {
  const moviesData = [
    {
      title: "Parasite",
      director: "Bong Joon-ho",
      year: 2019,
      length: 132,
      country: "South Korea",
    },
    {
      title: "Empire Strikes Back",
      director: "Irvin Kershner",
      year: 1980,
      length: 124,
      country: "USA",
    },
    {
      title: "Das Boot",
      director: "Wolfgang Petersen",
      year: 1981,
      length: 149,
      country: "Germany",
    },
    {
      title: "Temple of Doom",
      director: "Steven Spielberg",
      year: 1984,
      length: 118,
      country: "USA",
    },
    {
      title: "M",
      director: "Fritz Lang",
      year: 1931,
      length: 117,
      country: "Germany",
    },
    {
      title: "Metropolis",
      director: "Fritz Lang",
      year: 1927,
      length: 148,
      country: "Germany",
    },
    {
      title: "Godfather",
      director: "Francis Ford Coppola",
      year: 1972,
      length: 175,
      country: "USA",
    },
    {
      title: "Godfather, Part II",
      director: "Francis Ford Coppola",
      year: 1974,
      length: 202,
      country: "USA",
    },
    {
      title: "Loaded Weapon, Part I",
      director: "Gene Quintano",
      year: 1993,
      length: 84,
      country: "USA",
    },
    {
      title: "Spaceballs",
      director: "Mel Brooks",
      year: 1987,
      length: 96,
      country: "USA",
    },
    {
      title: "Dracula, Dead and Loving It",
      director: "Mel Brooks",
      year: 1995,
      length: 88,
      country: "USA",
    },
    {
      title: "Major League",
      director: "David S. Ward",
      year: 1989,
      length: 107,
      country: "USA",
    },
    {
      title: "Airplane!",
      director: "Jim Abrahams, David Zucker, Jerry Zucker",
      year: 1980,
      length: 88,
      country: "USA",
    },
    {
      title: "Airplane II: The Sequel",
      director: "Ken Finkleman",
      year: 1982,
      length: 85,
      country: "USA",
    },
  ];
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [maxLength, setMaxLength] = useState("");

  useEffect(() => {
    console.log("useEffect called");

    setMovies(
      moviesData.filter((movie) => {
        return (
          movie.title.toUpperCase().includes(search.toUpperCase()) &&
          ([NaN, 0].includes(parseInt(maxLength, 10)) ||
            parseInt(maxLength, 10) >= movie.length)
        );
      })
    );
  }, [search, maxLength]);

  const ascendingOrder = () => {
    const moviesAscend = [...movies];

    moviesAscend.sort(
      (movie, secondMovie) => movie.length - secondMovie.length
    );

    setMovies(moviesAscend);
  };

  const descendingOrder = () => {
    const moviesDescend = [...movies];

    moviesDescend.sort(
      (movie, secondMovie) => secondMovie.length - movie.length
    );

    setMovies(moviesDescend);
  };

  return (
    <>
      <SearchBar
        className='Search Bar'
        type='text'
        search={search}
        setSearch={setSearch}
        maxLength={maxLength}
        setMaxLength={setMaxLength}
        ascendingOrder={ascendingOrder}
        descendingOrder={descendingOrder}
      />

      <Movies movies={movies} />
    </>
  );
}

export default App;
