import React, { useRef } from 'react'
import { useSelector } from 'react-redux'

import './index.scss'

import emptyAvatar from '../../images/empty_avatar.png'

import { getOnlineDate } from '../../helpers'
import { sendMessage, typingMessage } from '../../configs/socket'
import { IUser } from '../../store/users/types'
import { getUserAvatar } from '../../helpers'


interface IProps {
  close: () => void
  user: IUser
}

const NewMessage: React.FC<IProps> = ({ close, user }) => {
  const ref = useRef<HTMLTextAreaElement>(null)
  const me = localStorage.getItem('me') || ''

  const sendHandler = (): void => {
    if (ref.current!.value) {
      sendMessage({
        from: me,
        to: user._id || '',
        text: ref.current!.value,
        date: Date.now()
      })
      ref.current!.value = ''
      close()
    }
  }

  return (
    <div className='new-message'>
      <div className='new-message__container'>
        <div className='new-message__top'>
          <div className='new-message__title'>
            Новое сообщение
          </div>

          <i
            className="material-icons new-message__close"
            onClick={() => close()}
          >
            close
          </i>
        </div>

        <div className='new-message__bottom'>
          <div className='new-message__user-block'>
            <div className='new-message__user-avatar'>
              <img src={getUserAvatar(user) || emptyAvatar} alt='user ava'/>
            </div>

            <div className='new-message__user-info'>
              <span className='new-message__user-name'>
                {user.name} {user.surname}
              </span>

              <span className='new-message__user-online'>
                {getOnlineDate(+user.online) || 'онлайн'}
              </span>
            </div>
          </div>

          <div className='new-message__text-wrapper'>
            <textarea ref={ref} onChange={() => typingMessage(me, user._id || '')}/>
          </div>

          <div className='new-message__button-block'>
            <div
              className='new-message__button'
              onClick={sendHandler}
            >
              Отправить
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewMessage
