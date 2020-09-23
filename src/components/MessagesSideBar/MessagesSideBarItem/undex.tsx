import React from 'react'

import './index.scss'


interface IProps {
  title: string,
  click: () => void,
  isCurrent: boolean
}

const MessagesSideBarItem: React.FC<IProps> = ({ title, click, isCurrent }) => {
  return (
    <div
      className={`messages-side-bar-item ${isCurrent ? 'messages-side-bar-item_active' : ''}`}
      onClick={click}
    >
      {title}
    </div>
  )
}

export default MessagesSideBarItem
