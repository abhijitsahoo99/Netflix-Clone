import React from 'react'
import './home.css'
import Navbar from '../../components/Navbar/Navbar'
import Featured from '../../components/Featured/Featured'
import List from '../../components/List/List'

function home() {
  return (
    <div className='home'>
      <Navbar  />
      <Featured type="movie" />
      <List  />
      <List  />
      <List  />
    </div>
  )
}

export default home
