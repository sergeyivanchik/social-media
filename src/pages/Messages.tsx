import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom';

import LeftSideBar from '../components/LeftSideBar'
import Chats from '../components/Chats'
import MessagesSideBar from '../components/MessagesSideBar'

import { getUserById } from '../store/users/actions'


const Messages: React.FC = () => {
  const dispatch = useDispatch()
  const { userId } = useParams()

  useEffect(() => {
    dispatch(getUserById(userId))
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
