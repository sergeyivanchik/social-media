import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import LeftSideBar from '../components/LeftSideBar'
import CurrentChat from '../components/CurrentChat'
import RightSideBar from '../components/RightSideBar'

import { getUserById } from '../store/users/actions'
import {  getCurrentChat } from '../store/chats/selectors'


const Chat: React.FC = () => {
  const [currentItem, setCurrentItem] = useState(0)

  const dispatch = useDispatch()
  const currentChat = useSelector(getCurrentChat)

  const me = localStorage.getItem('me') || ''
  const currentUser = currentChat?.participants?.find(elem => elem._id !== me)


  useEffect(() => {
    currentUser?._id && dispatch(getUserById(currentUser?._id || ''))
  }, [currentUser])

  const items = [
    {
      title: 'Все сообщения'
    },
    {
      title: 'Непрочитанные сообщения'
    }
  ]

  return (
    <>
      <LeftSideBar/>
      <CurrentChat currentUser={currentUser}/>
      <RightSideBar
        items={items}
        currentItem={currentItem}
        setCurrentItem={setCurrentItem}
      />
    </>
  );
}

export default Chat
