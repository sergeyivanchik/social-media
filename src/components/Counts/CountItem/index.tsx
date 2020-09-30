import React, { useState } from 'react'

import './index.scss'

import FriendsModal from '../../FriendsModal'


interface IProps {
  label: string
  count: number
  id: number
}

const CountItem: React.FC<IProps> = ({ label, count, id }) => {
  const [showFriends, setShowFriends] = useState(false)

  const handleClick = (): void => {
    if (id === 0 || id === 1) {
      setShowFriends(true)
    }
  }

  if (!count) {
    return null
  }

  return (
    <>
      <div className='count-item' onClick={handleClick}>
        <div className="count-item__count">
          {count}
        </div>

        <div className="count-item__label">
          {label}
        </div>
      </div>

      {
        showFriends &&
        <FriendsModal close={() => setShowFriends(false)} tab={id}/>
      }
    </>
  )
}

export default CountItem
