import React from 'react'

import './index.scss'

import User from './User'


const Header: React.FC = () => {
  return (
    <div className='header'>
      <div className='header__container'>
        <div className='header__wrapper'>
          <i className='material-icons header__emblem'>eco</i>
          <User/>
        </div>
      </div>
    </div>
  )
}

export default Header