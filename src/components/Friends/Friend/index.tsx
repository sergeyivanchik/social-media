import React from 'react'
import { Link } from 'react-router-dom'

import './index.scss'

import emptyAvatar from '../../../images/empty_avatar.png'


interface IProps {
  name: string
  photo: string
  surname: string
  id: string
}

const Friend: React.FC<IProps> = ({ name, photo, surname, id }) => {
  return (
    <Link to={`/${id}`}>
      <div className='friend'>
        <div className='friend__photo'>
          <img src={photo || emptyAvatar} alt='friend ava'/>
        </div>

        <div className='friend__name'>
          {name}
        </div>
      </div>
    </Link>
  )
}

export default Friend
