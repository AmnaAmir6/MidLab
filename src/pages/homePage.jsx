import React, { useContext,useState } from 'react'
import Header from '../components/Header'
import MovieList from '../components/MovieList'

import { SearchedMovie } from './context'

const HomePage = () => {
const [searchedMovie,setSearchedMovie]=useState('')

  return (
    <>
    <SearchedMovie.Provider value={{searchedMovie,setSearchedMovie}}>
    <Header/>
    <MovieList/>
    </SearchedMovie.Provider>
    </>
  )
}

export default HomePage