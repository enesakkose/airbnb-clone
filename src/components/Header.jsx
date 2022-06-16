import React from 'react'
import {FiSearch} from 'react-icons/fi'
import {GrLanguage} from 'react-icons/gr'
import {MdOutlineExpandMore} from 'react-icons/md'
import { Avatar } from '@material-ui/core'

import './Header.scss'

function Header() {
  return (
    <header className='header'>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png" alt="brand_logo" className="header__logo" />

        <div className="header__search">
          <div className="header__searchInput">
            <input  type="text" readOnly='readonly' placeholder='Start your search'/>
            <div className="search__Icon">
                <FiSearch color='white' size={12}  className='search'/>
            </div> 
          </div>
        </div>

        <div className="header__user">
            <button>Becoma a host</button>
            <button><GrLanguage size={16}/></button>
            <a className="header__userProfile">
                <MdOutlineExpandMore/>
                <Avatar className='avatar' />
            </a>
        </div>
    </header>
  )
}

export default Header