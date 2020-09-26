import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';

import './index.scss'

import emptyAvatar from '../../images/empty_avatar.png'

import NewMessage from '../NewMessage'

import { getAvatar, selectUser } from '../../store/users/selectors'


const Photo: React.FC = () => {
  const [showNewMessage, setShowNewMessage] = useState(false)

  const avatar = useSelector(getAvatar)
  const me = localStorage.getItem('me') || ''
  const { id } = useParams()
  const user = useSelector(selectUser)

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
            ? <div className="photo__button" onClick={() => setShowNewMessage(true)}>
                Написать сообщение
              </div>
            : <div className="photo__button photo__button_edit">
                Редактировать
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