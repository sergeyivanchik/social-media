import React from 'react'
import { useSelector } from 'react-redux'

import './index.scss'
import emptyAvatar from '../../../images/empty_avatar.png'

import { selectCurrentUser, getCurrentUserAvatar } from '../../../store/users/selectors'


const User: React.FC = () => {
  const currentUser = useSelector(selectCurrentUser)
  const avatar = useSelector(getCurrentUserAvatar)

  return (
    <div className='user'>
      <span className='user__name'>
        {currentUser.name}
      </span>
      <img
        src={avatar || emptyAvatar}
        className='user__avatar'
      />
      <i className='material-icons user__arrow'>expand_more</i>
    </div>
  )
}

export default User