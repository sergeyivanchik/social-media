import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom';

import LeftSideBar from '../components/LeftSideBar'
import Chats from '../components/Chats'
import RightSideBar from '../components/RightSideBar'

import { getUserById } from '../store/users/actions'


const Messages: React.FC = () => {
  const [currentItem, setCurrentItem] = useState(0)

  const dispatch = useDispatch()
  const { userId } = useParams()

  const items = [
    {
      title: 'Все сообщения'
    },
    {
      title: 'Непрочитанные сообщения'
    }
  ]

  useEffect(() => {
    dispatch(getUserById(userId))
  }, [])


  return (
    <>
      <LeftSideBar/>
      <Chats/>
      <RightSideBar
        items={items}
        currentItem={currentItem}
        setCurrentItem={setCurrentItem}
      />
    </>
  );
}

export default Messages
