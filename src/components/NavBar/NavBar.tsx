import React from 'react'
import Nav from './Nav'

type Props = {}

const NavBar = (props: Props) => {
  return (
    <header className='w-1/4 h-full rounded-2xl relative'>
      <Nav />
        <img src='../public/Menu.png' alt='Menu Fondo' className='h-full w-full'/>
        
    </header>
  )
}

export default NavBar