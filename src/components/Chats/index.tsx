import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import './index.scss'

import Chat from './Chat'

import { selectChats } from '../../store/chats/selectors'
import { getChatUser } from '../../helpers'
import { getCurrentUserChats } from '../../store/chats/actions'
import Preloader from '../Preloader'


const Chats: React.FC = () => {
  const dispatch = useDispatch()
  const chats = useSelector(selectChats)
  const me = localStorage.getItem('me') || ''

  useEffect(() => {
    dispatch(getCurrentUserChats())
  }, [])

  return (
    <div className='chats'>
      {
        !chats.length
          ? <Preloader/>
          : <>
              {
                chats.map(elem => (
                  <Chat
                    key={elem._id}
                    text={elem.lastMessage?.text}
                    user={getChatUser(elem.participants)}
                    date={+(elem?.lastMessage?.date || '')}
                    me={me}
                    fromUser={elem?.lastMessage?.from}
                    id={elem._id || ''}
                  />
                ))
              }
            </>
      }
    </div>
  );
}

export default Chats
