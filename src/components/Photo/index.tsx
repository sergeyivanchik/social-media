import React from 'react'
import { useSelector } from 'react-redux'

import './index.scss'

import emptyAvatar from '../../images/empty_avatar.png'

import { getAvatar } from '../../store/users/selectors'


const Photo: React.FC = () => {
  const avatar = useSelector(getAvatar)

  return (
    <div className='photo'>
      <div className='photo__img'>
        <img
          src={avatar || emptyAvatar}
          alt='user avatar'
        />
      </div>
    </div>
  )
}

export default Photo