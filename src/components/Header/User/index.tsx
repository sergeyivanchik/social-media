import React from 'react'
import { useSelector } from 'react-redux'

import './index.scss'
import emptyAvatar from '../../../images/empty_avatar.png'

import {
  selectCurrentUser,
  getCurrentUserAvatar,
  getLoading
} from '../../../store/users/selectors'


const User: React.FC = () => {
  const currentUser = useSelector(selectCurrentUser)
  const avatar = useSelector(getCurrentUserAvatar)
  const loading = useSelector(getLoading)

  if (loading) {
    return null
  }

  return (
    <div className='user'>
      <span className='user__name'>
        {currentUser.name}
      </span>
      <img
        src={avatar || emptyAvatar}
        className='user__avatar'
        alt='user ava'
      />
      <i className='material-icons user__arrow'>expand_more</i>
    </div>
  )
}

export default User
