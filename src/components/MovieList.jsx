import React, { useEffect, useState } from 'react'
import MovieItem from './MovieItem';

import { useContext } from 'react'
import { SearchedMovie } from '../pages/context';

const MovieList = () => {
  const searchMovieTitle = useContext(SearchedMovie);
  const [movies,setMovies]=useState([]);

  useEffect(()=>{
    fetchMovies();
  },[])

  useEffect(()=>{
    FilterMovies();
  },[searchMovieTitle])

  function fetchMovies(){
    const data =[
    {img:"/src/assets/poster.png",
    title :"Outsider",
    releasedate:"11-11-2023",
    rating:"4.5"},
    {
      img:"/src/assets/poster.png",
      title :"Outsider",
      releasedate:"11-11-2023",
      rating:"2.5"
    },
    {
      img:"/src/assets/poster.png",
      title :"Outsider",
      releasedate:"11-11-2023",
      rating:"3"
    }
  ]
  setMovies(data);
};

function FilterMovies(){
  if(searchMovieTitle ) {
    setMovies(movies.filter(movie => movie.title===searchMovieTitle));
 }
}
  
  return (
    <>
    <div>
    {movies.map((movie,index) => (<MovieItem key={index} {...movie}/>))}
    </div>
    </>
  )
}

export default MovieList