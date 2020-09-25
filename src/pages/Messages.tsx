import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';

import LeftSideBar from '../components/LeftSideBar'
import Chats from '../components/Chats'
import MessagesSideBar from '../components/MessagesSideBar'
import Preloader from '../components/Preloader'

import { getUserById } from '../store/users/actions'
import { getCurrentUserChats } from '../store/chats/actions'
import { getLoading } from '../store/users/selectors'


const Messages: React.FC = () => {
  const dispatch = useDispatch()
  const { userId } = useParams()
  const loading = useSelector(getLoading)

  useEffect(() => {
    dispatch(getUserById(userId))
  }, [])

  if (loading) {
    return <Preloader/>
  }

  return (
    <>
      <LeftSideBar/>
      <Chats/>
      <MessagesSideBar/>
    </>
  );
}

export default Messages
