import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';

import LeftSideBar from '../components/LeftSideBar'
import FriendList from '../components/FriendList'
import MessagesSideBar from '../components/MessagesSideBar'

import { getUserById } from '../store/users/actions'


const Friends: React.FC = () => {
  const dispatch = useDispatch()
  const { userId } = useParams()

  useEffect(() => {
    dispatch(getUserById(userId))
  }, [])

  return (
    <>
      <LeftSideBar/>
      <FriendList/>
      <MessagesSideBar/>
    </>
  );
}

export default Friends
