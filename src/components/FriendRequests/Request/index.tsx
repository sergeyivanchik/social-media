import React from 'react'
import { Link } from 'react-router-dom'

import './index.scss'

import emptyAvatar from '../../../images/empty_avatar.png'

import { IUser } from '../../../store/users/types'

import { getUserAvatar } from '../../../helpers'


interface IProps {
  user: IUser
  outgoing?: boolean
}

const Request: React.FC<IProps> = ({ user, outgoing}) => {
  return (
    <>
      <div className='request'>
        <div className='request__avatar'>
          <Link to={`/${user._id}`}>
            <img src={getUserAvatar(user) || emptyAvatar} alt='ava'/>
          </Link>

          {
            user?.online === 'online' &&
            <div className='request__online'>
              <div/>
            </div>
          }
        </div>

        <div className='request__info'>
          <Link to={`/${user._id}`}>
            <div className='request__name'>
              {user.name} {user.surname}
            </div>
          </Link>

          <div className='request__button'>
            {
              !outgoing
                ? 'Добавить в друзья'
                : 'Отписаться'
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Request
