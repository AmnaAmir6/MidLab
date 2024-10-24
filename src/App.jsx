import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/homePage'
import MovieDetailPage from './pages/movieDetailPage'
import FavouritesPage from './pages/favouritesPage'


function App() {
  return (
    
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/movie/:id' element={<MovieDetailPage/>}/>
          <Route path='/favorites' element={<FavouritesPage/>}/>
        </Routes>
      </BrowserRouter>
   
  )
}

export default App
