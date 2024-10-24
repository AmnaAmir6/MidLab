import React from 'react'
import Header from '../components/Header'
import MovieList from '../components/MovieList'

import { SearchedMovie } from './context'

const HomePage = () => {
  return (
    <>
    <SearchedMovie.Provider>
    <Header/>
    <MovieList/>
    </SearchedMovie.Provider>
    </>
  )
}

export default HomePage