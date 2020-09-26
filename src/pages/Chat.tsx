import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import LeftSideBar from '../components/LeftSideBar'
import CurrentChat from '../components/CurrentChat'
import MessagesSideBar from '../components/MessagesSideBar'

import { getUserById } from '../store/users/actions'
import {  getCurrentChat } from '../store/chats/selectors'


const Chat: React.FC = () => {
  const dispatch = useDispatch()
  const currentChat = useSelector(getCurrentChat)

  const me = localStorage.getItem('me') || ''
  const currentUser = currentChat?.participants?.find(elem => elem._id !== me)


  useEffect(() => {
    currentUser?._id && dispatch(getUserById(currentUser?._id || ''))
  }, [currentUser])

  return (
    <>
      <LeftSideBar/>
      <CurrentChat currentUser={currentUser}/>
      <MessagesSideBar/>
    </>
  );
}

export default Chat
