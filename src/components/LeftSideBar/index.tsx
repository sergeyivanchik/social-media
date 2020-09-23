import React from 'react'

import './index.scss'
import SideBarItem from './SideBarItem'


const LeftSideBar: React.FC = () => {
  const me = localStorage.getItem('me') || '/'

  return (
    <div className='left-side-bar'>
      <SideBarItem title='Моя страница' icon='home' link={me}/>
      <SideBarItem title='Сообщения' icon='forum' link={`messages/${me}`}/>
      <SideBarItem title='Друзья' icon='person' link={me}/>
    </div>
  )
}

export default LeftSideBar