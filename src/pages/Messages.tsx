import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';

import LeftSideBar from '../components/LeftSideBar'
import Chats from '../components/Chats'
import MessagesSideBar from '../components/MessagesSideBar'

import { getUserById } from '../store/users/actions'
import { getCurrentUserChats } from '../store/chats/actions'


const Messages: React.FC = () => {
  const dispatch = useDispatch()
  const { userId } = useParams()

  useEffect(() => {
    dispatch(getUserById(userId))
    dispatch(getCurrentUserChats())
  }, [])

  return (
    <>
      <LeftSideBar/>
      <Chats/>
      <MessagesSideBar/>
    </>
  );
}

export default Messages
