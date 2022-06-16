import React, {useState} from 'react'
import './Banner.scss'
import Search from './Search'

function Banner() {

    const [showSearch, setShowSearch] = useState(false)

  return (
    <div className='banner'>
        <div className="banner__search">
            
            <button onClick={() => setShowSearch(!showSearch)} className='banner__searchButton'>{showSearch ? 'Hide' : 'Search Dates'}</button>

            {showSearch && (
                <>
                <Search /> 
                </>
            )}

        </div>
        <div className="banner__info">
            <h1>Get out and stretch your imagination</h1>
            <p>Plan a different kind of getawa to uncover the hidden gems near you</p>
            <button className='banner__infoButton'>Explore Nearby</button>
        </div>
    </div>
  )
}

export default Banner