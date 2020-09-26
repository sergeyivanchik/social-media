import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

import './index.scss'

import emptyAvatar from '../../../images/empty_avatar.png'

import { getMessageDate, getUserAvatar } from '../../../helpers'
import {
  getCurrentUserAvatar,
  selectUser,
  selectCurrentUser,
  getAvatar
} from '../../../store/users/selectors'
import { IUser } from '../../../store/users/types'


interface IProps {
  text?: string
  date: number,
  from?: IUser
}

const Message: React.FC<IProps> = ({ text, date, from }) => {
  const me = localStorage.getItem('me')
  const meAvatar = useSelector(getCurrentUserAvatar)
  const userAvater = useSelector(getAvatar)
  const meInfo = useSelector(selectCurrentUser)
  const userInfo = useSelector(selectUser)

  const ava = getUserAvatar(from)
  const userName = me === from?._id ? meInfo.name : userInfo.name

  return (
    <div className='message'>
      <div className='message__user-photo'>
        <Link to={`/${from?._id}`}>
          <img src={ava || emptyAvatar} alt='ava'/>
        </Link>
      </div>

      <div className='message__info'>
        <div className='message__user'>
          <Link to={`/${from}`}>
            <span className='message__user-name'>
              {userName}
            </span>
          </Link>
          <span className='message__date'>
            {getMessageDate(date) || ''}
          </span>
        </div>

        <div className='message__text'>
          { text }
        </div>
      </div>
    </div>
  );
}

export default Message
