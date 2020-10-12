import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import './index.scss'

import SideBarItem from './SideBarItem'

import { removeCurrentUserChats, getCurrentUserChats } from '../../store/chats/actions'
import {
  removeUser,
  getUserById,
  getIncomingFriends,
  getOugoingFriends
} from '../../store/users/actions'
import { selectIncomingFriendRequests } from '../../store/users/selectors'


const LeftSideBar: React.FC = () => {
  const me = localStorage.getItem('me') || '/'
  const dispatch = useDispatch()
  const incomingFriendRequests = useSelector(selectIncomingFriendRequests)

  useEffect(() => {
    dispatch(getIncomingFriends())
    dispatch(getOugoingFriends())
  }, [])

  return (
    <div className='left-side-bar'>
      <SideBarItem
        title='Моя страница'
        icon='home'
        link={me}
        click={() => {
          dispatch(removeUser())
          dispatch(getUserById(me))
        }}
      />
      <SideBarItem
        title='Сообщения'
        icon='forum'
        link={`${me}/messages`}
        click={() => {
          dispatch(removeCurrentUserChats())
          dispatch(getCurrentUserChats())
        }}
      />
      <SideBarItem
        title='Друзья'
        icon='person'
        link={`${me}/friends`}
        click={() => {
          dispatch(removeUser())
          dispatch(getUserById(me))
        }}
        count={incomingFriendRequests?.length}
      />
    </div>
  )
}

export default LeftSideBar
