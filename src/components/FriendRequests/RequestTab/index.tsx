import React from 'react'

import './index.scss'


interface IProps {
  title: string
  count: number
  isCurrent: boolean
  click: () => void
}

const RequestTab: React.FC<IProps> = ({ title, count, isCurrent, click }) => {
  return (
    <div
      className={`request-tab ${isCurrent ? 'request-tab_active' : ''}`}
      onClick={click}
    >
      <span className='request-tab__title'>
        {title}
      </span>

      {
        !!count &&
        <span className='request-tab__count'>
          {count}
        </span>
      }
    </div>
  )
}

export default RequestTab
