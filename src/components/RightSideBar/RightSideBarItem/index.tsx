import React from 'react'

import './index.scss'


interface IProps {
  title: string
  click: () => void
  isCurrent: boolean
  count?: number
}

const RightSideBarItem: React.FC<IProps> = ({ title, click, isCurrent, count }) => {
  return (
    <div
      className={`right-side-bar-item ${isCurrent ? 'right-side-bar-item_active' : ''}`}
      onClick={click}
    >
      {title}

      {
        !!count &&
        <span className='right-side-bar-item__count'>
          {count > 99 ? '99+' : count}
        </span>
      }
    </div>
  )
}

export default RightSideBarItem
