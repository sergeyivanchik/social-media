import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import './index.scss'

import Preloader from '../Preloader'
import Message from './Message'

import { getMessages, getLoading } from '../../store/chats/selectors'
import { getOnlineDate } from '../../helpers'
import { IUser } from '../../store/users/types'
import { getCurrenChatMessages, getCurrentUserChat } from '../../store/chats/actions'


interface IProps {
  currentUser?: IUser
}

const CurrentChat: React.FC<IProps> = ({ currentUser }) => {
  const dispatch = useDispatch()
  const { id } = useParams()
  const messages = useSelector(getMessages)
  const online = currentUser?.online || 0
  const ref = useRef<HTMLDivElement>(null)
  const loading = useSelector(getLoading)

  useEffect(() => {
    dispatch(getCurrenChatMessages(id))
    dispatch(getCurrentUserChat(id))
  }, [id])

  useEffect(() => {
    if (ref.current) {
      // setTimeout(() => {
        ref.current!.scrollTop = ref.current!.scrollHeight
      // })
    }
  })

  return (
    <div className='current-chat'>
      {
        !currentUser || !messages || loading
          ? <Preloader/>
          : <>
              <div className='current-chat__top'>
                <div className='current-chat__user'>
                  <span className='current-chat__user-name'>
                    {currentUser?.name} {currentUser?.surname}
                  </span>
                  <span className='current-chat__user-status'>
                    {getOnlineDate(+online)  || 'онлайн'}
                  </span>
                </div>
              </div>

              <div className='current-chat__messages' ref={ref}>
                {
                  messages?.map(elem => (
                    <Message
                      key={elem._id}
                      text={elem.text}
                      date={elem.date}
                      from={elem.from}
                    />
                  ))
                }
              </div>
            </>
      }
    </div>
  );
}

export default CurrentChat