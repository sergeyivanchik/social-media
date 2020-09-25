import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

import './index.scss'

import emptyAvatar from '../../../images/empty_avatar.png'

import { IUser } from '../../../store/users/types'
import { getAvatarFromChat, getMessageDate } from '../../../helpers'
import { getCurrentUserAvatar } from '../../../store/users/selectors'
import { getTyping } from '../../../store/chats/selectors'


interface IProps {
  text?: string,
  user?: IUser,
  date: number,
  me?: string,
  fromUser?: string,
  id?: string
}

const Chat: React.FC<IProps> = ({ text, user, date, me, fromUser, id }) => {
  const avatar = useSelector(getCurrentUserAvatar)
  const typings = useSelector(getTyping)

  return (
    <Link to={`/chat/${id}`}>
      <div className='chat'>
        <div className='chat__photo'>
          <img src={getAvatarFromChat(user) || emptyAvatar} alt='user ava'/>
        </div>

        <div className='chat__info'>
          <div className='chat__user-info'>
            <span className='chat__user'>
              {user?.name} {user?.surname}
            </span>
            <span className='chat__date'>
              {getMessageDate(date) || ''}
            </span>
          </div>

          {
            me === fromUser
            ? <div className='chat__me-message'>
              {
                typings?.find(elem => elem.from === user?._id && elem.chatId === id)
                ? 'печатает сообщение...'
                : <>
                    <div className='chat__me-avatar'>
                      <img src={avatar || emptyAvatar} alt='me ava'/>
                    </div>
                    <span>{text}</span>
                  </>
              }
              </div>
            : <div className='chat__message'>
                {
                  typings?.find(elem => elem === user?._id)
                    ? 'печатает сообщение...'
                    : `${text}`
                }
              </div>
          }
        </div>
      </div>
    </Link>
  );
}

export default Chat
