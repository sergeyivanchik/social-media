import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';

import LeftSideBar from '../components/LeftSideBar'
import FriendList from '../components/FriendList'
import RightSideBar from '../components/RightSideBar'
import FriendRequets from '../components/FriendRequests'

import { getUserById } from '../store/users/actions'
import {
  selectIncomingFriendRequests,
  selectOutgoingFriendRequests
} from '../store/users/selectors'


const Friends: React.FC = () => {
  const [currentItem, setCurrentItem] = useState(0)

  const dispatch = useDispatch()
  const { userId } = useParams()
  const me = localStorage.getItem('me') || ''
  const incomingFriendRequests = useSelector(selectIncomingFriendRequests)
  const outgoingFriendRequests = useSelector(selectOutgoingFriendRequests)

  const items = [
    {
      title: 'Мои друзья'
    },
    {
      title: 'Заявки в друзья',
      count: outgoingFriendRequests?.length
        ? incomingFriendRequests?.length
        : incomingFriendRequests?.length || -1
    }]

  useEffect(() => {
    dispatch(getUserById(userId))
  }, [])

  return (
    <>
      <LeftSideBar/>
      <div>
        {
          (!!incomingFriendRequests?.length || !!outgoingFriendRequests?.length) &&
          me === userId &&
          <FriendRequets
            incomingRequests={incomingFriendRequests}
            outgoingRequests={outgoingFriendRequests}
            currentItem={currentItem}
          />
        }
        {
          currentItem === 0 &&
          <FriendList/>
        }
      </div>
      <RightSideBar
        items={items}
        currentItem={currentItem}
        setCurrentItem={setCurrentItem}
      />
    </>
  );
}

export default Friends
