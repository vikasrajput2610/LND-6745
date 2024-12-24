import React from 'react'
import Header from './components/Header'
import Originals from './components/Originals'
import Trending from './components/Trending'
import Top_Rated from './components/Top_Rated'
import Popular from './components/Popular'
import Now_playing from './components/Now_playing'
import Upcoming from './components/Upcoming'

const App = () => {
  return (
    <div className=''>
      <Header/>
      <Originals/>
      <Upcoming/>
      <Now_playing/>
      <Trending/>
      <Top_Rated/>
      <Popular/>

    </div>
  )
}

export default App