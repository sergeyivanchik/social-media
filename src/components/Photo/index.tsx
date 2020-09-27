import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import './index.scss'

import emptyAvatar from '../../images/empty_avatar.png'

import NewMessage from '../NewMessage'

import { getAvatar, selectUser, selectCurrentUser } from '../../store/users/selectors'
import { isFriend } from '../../helpers'


const Photo: React.FC = () => {
  const [showNewMessage, setShowNewMessage] = useState(false)

  const avatar = useSelector(getAvatar)
  const me = localStorage.getItem('me') || ''
  const { id } = useParams()
  const user = useSelector(selectUser)
  const currentuser = useSelector(selectCurrentUser) || []

  return (
    <>
      <div className='photo'>
        <div className='photo__img'>
          <img
            src={avatar || emptyAvatar}
            alt='user avatar'
          />
        </div>

        {
          id !== me
            ? <div className='photo__button' onClick={() => setShowNewMessage(true)}>
                Написать сообщение
              </div>
            : <div className='photo__button photo__button_action'>
                Редактировать
              </div>
        }

        {
          isFriend(currentuser?.friends, id)
            ? <div className='photo__button photo__button_action'>
                У Вас в друзьях
              </div>
            : id !== me &&
              <div className='photo__button'>
                Добавить в друзья
              </div>
        }
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

export default Photo
