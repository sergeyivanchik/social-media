import React from 'react'

import './index.scss'


interface IProps {
  title: string
  count: number
  isCurrent: boolean
  click: () => void
}

const FriendsTab: React.FC<IProps> = ({ title, count, isCurrent, click }) => {
  return (
    <div
      className={`friends-tab ${isCurrent ? 'friends-tab_active' : ''}`}
      onClick={click}
    >
      <span className='friends-tab__title'>
        {title}
      </span>

      {
        !!count &&
        <span className='friends-tab__count'>
          {count}
        </span>
      }
    </div>
  )
}

export default FriendsTab
