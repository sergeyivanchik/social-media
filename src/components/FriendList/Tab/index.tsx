import React from 'react'

import './index.scss'


interface IProps {
  title: string
  count: number
  isCurrent: boolean
  click: () => void
}

const Tab: React.FC<IProps> = ({ title, count, isCurrent, click }) => {
  return (
    <div
      className={`tab ${isCurrent ? 'tab_active' : ''}`}
      onClick={click}
    >
      <span className='tab__title'>
        {title}
      </span>

      {
        !!count &&
        <span className='tab__count'>
          {count}
        </span>
      }
    </div>
  )
}

export default Tab
