import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import './index.scss'

import emptyAvatar from '../../../images/empty_avatar.png'

import { IUser } from '../../../store/users/types'

import { getUserAvatar } from '../../../helpers'


interface IProps {
  user: IUser
}

const FriendModal: React.FC<IProps> = ({ user }) => {
  const avatar = getUserAvatar(user)

  return (
    <div className='friend-modal'>
      <Link to={`/${user._id}`}>
        <div className='friend-modal__avatar'>
          <img src={avatar || emptyAvatar} alt=''/>
        </div>
      </Link>

      <Link to={`/${user._id}`}>
        <div className='friend-modal__name'>
          <span>{user.name}</span>
          <span>{user.surname}</span>
        </div>
      </Link>
    </div>
  )
}

export default FriendModal
