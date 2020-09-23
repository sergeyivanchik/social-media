import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import './index.scss'

import Chat from './Chat'

import { selectChats } from '../../store/chats/selectors'
import { getChatUser } from '../../helpers'


const Chats: React.FC = () => {
  const chats = useSelector(selectChats)
  const me = localStorage.getItem('me') || ''

  return (
    <div className='chats'>
      {
        chats.map(elem => (
          <Chat
            key={elem._id}
            text={elem.lastMessage?.text}
            user={getChatUser(elem.participants)}
            date={+elem.lastMessage?.date}
            me={me}
            from={elem.lastMessage?.from}
          />
        ))
      }
    </div>
  );
}

export default Chats
