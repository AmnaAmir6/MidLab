import React from 'react'
import { Link } from 'react-router-dom'
//import '/src/components/navbar.css'

const Navbar = () => {
  return (
    <>
     <nav id='navbar' className="bg-slate-600 p-3 fixed top-0 w-full z-10" >
      <div className="container mx-auto flex justify-between items-center flex-row">
      <div >
          <img src="/src/assets/movieLogo.png" alt="" className='w-[40px]' />
        </div>
        <div className='w-[50%] px-2 flex justify-around '>
        <a href='/movie'>Movies</a>
        <a href='/favourite'>Favourite</a>
        </div>
        </div>
        
    </nav>
    
    </>
  )
}

export default Navbar