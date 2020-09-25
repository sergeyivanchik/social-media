import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';

import LeftSideBar from '../components/LeftSideBar'
import CurrentChat from '../components/CurrentChat'
import MessagesSideBar from '../components/MessagesSideBar'

import { getUserById } from '../store/users/actions'
import { getCurrentUserChats, getCurrentUserChat } from '../store/chats/actions'
import { selectChats, getCurrentChat } from '../store/chats/selectors'


const Chat: React.FC = () => {
  const dispatch = useDispatch()
  const currentChat = useSelector(getCurrentChat)

  const me = localStorage.getItem('me') || ''
  const currentUser = currentChat?.participants?.find(elem => elem._id !== me)


  useEffect(() => {
    currentUser?._id && dispatch(getUserById(currentUser?._id || ''))
  }, [])

  return (
    <>
      <LeftSideBar/>
      <CurrentChat currentUser={currentUser}/>
      <MessagesSideBar/>
    </>
  );
}

export default Chat
