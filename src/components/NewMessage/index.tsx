import React, { useRef } from 'react'
import { useSelector } from 'react-redux'

import './index.scss'

import emptyAvatar from '../../images/empty_avatar.png'

import { selectUser, getAvatar } from '../../store/users/selectors'
import { getOnlineDate } from '../../helpers'


interface IProps {
  close: () => void
}

const NewMessage: React.FC<IProps> = ({ close }) => {
  const user = useSelector(selectUser)
  const avatar = useSelector(getAvatar)
  const ref = useRef<HTMLTextAreaElement>(null)

  const sendHandler = (): void => {
    if (ref.current!.value) {
      console.log(ref.current!.value)
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
              <img src={avatar || emptyAvatar} alt='user ava'/>
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
            <textarea ref={ref}/>
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
