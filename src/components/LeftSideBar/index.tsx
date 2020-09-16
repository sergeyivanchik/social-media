import React from 'react'

import './index.scss'
import SideBarItem from './SideBarItem'


const LeftSideBar: React.FC = () => {
  return (
    <div className='left-side-bar'>
      <SideBarItem title='Моя страница' icon='home'/>
      <SideBarItem title='Сообщения' icon='forum'/>
      <SideBarItem title='Друзья' icon='person'/>
    </div>
  )
}

export default LeftSideBar