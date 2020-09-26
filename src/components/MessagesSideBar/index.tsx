import React, { useState } from 'react'

import './index.scss'
import MessagesSideBarItem from './MessagesSideBarItem'


const MessagesSideBar: React.FC = () => {
  const [currentItem, setCurrentItem] = useState(0)

  const items = ['Все сообщения', 'Непрочитанные сообщения']

  return (
    <div className='messages-side-bar'>
      {
        items.map((elem, index) => (
          <MessagesSideBarItem
            title={elem}
            key={index}
            click={() => setCurrentItem(index)}
            isCurrent={currentItem === index}
          />
        ))
      }
    </div>
  )
}

export default MessagesSideBar
