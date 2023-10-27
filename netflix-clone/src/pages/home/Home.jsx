import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Featured from '../../components/Featured/Featured'

function home() {
  return (
    <div>
      <Navbar  />
      <Featured type="movie" />
    </div>
  )
}

export default home
