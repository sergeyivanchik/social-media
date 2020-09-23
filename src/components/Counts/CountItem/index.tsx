import React from 'react'

import './index.scss'


interface IProps {
  label: string
  count: number
}

const CountItem: React.FC<IProps> = ({ label, count }) => {
  if (!count) {
    return null
  }

  return (
    <div className='count-item'>
      <div className="count-item__count">
        {count}
      </div>

      <div className="count-item__label">
        {label}
      </div>
    </div>
  )
}

export default CountItem
