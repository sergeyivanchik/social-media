import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import './index.scss'

import SideBarItem from './SideBarItem'

import { removeCurrentUserChats, getCurrentUserChats } from '../../store/chats/actions'
import { removeUser, getUserById } from '../../store/users/actions'


const LeftSideBar: React.FC = () => {
  const me = localStorage.getItem('me') || '/'
  const dispatch = useDispatch()

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
        link={`messages/${me}`}
        click={() => {
          dispatch(removeCurrentUserChats())
          dispatch(getCurrentUserChats())
        }}
      />
      <SideBarItem
        title='Друзья'
        icon='person'
        link={me}
        click={() => dispatch(removeCurrentUserChats())}
      />
    </div>
  )
}

export default LeftSideBar