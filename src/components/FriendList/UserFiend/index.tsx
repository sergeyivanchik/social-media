import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import './index.scss'

import emptyAvatar from '../../../images/empty_avatar.png'

import NewMessage from '../../NewMessage'

import { IUser } from '../../../store/users/types'

import { getUserAvatar } from '../../../helpers'


interface IProps {
  user: IUser
}

const UserFriend: React.FC<IProps> = ({ user }) => {
  const [showNewMessage, setShowNewMessage] = useState(false)

  return (
    <>
      <div className='user-friend'>
        <div className='user-friend__avatar'>
          <Link to={`/${user._id}`}>
            <img src={getUserAvatar(user) || emptyAvatar} alt='ava'/>
          </Link>

          {
            user?.online === 'online' &&
            <div className='user-friend__online'>
              <div/>
            </div>
          }
        </div>

        <div className='user-friend__info'>
          <Link to={`/${user._id}`}>
            <div className='user-friend__name'>
              {user.name} {user.surname}
            </div>
          </Link>

          <div
            className='user-friend__mailing'
            onClick={() => setShowNewMessage(true)}
          >
            Написать сообщение
          </div>
        </div>
      </div>

      {
        showNewMessage &&
        <NewMessage
          close={() => setShowNewMessage(false)}
          user={user}
        />
      }
    </>
  )
}

export default UserFriend
