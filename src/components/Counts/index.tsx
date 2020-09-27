import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import './index.scss'

import CountItem from './CountItem'

import {
  getFriendCount,
  getPhotosCount,
  selectUser,
  selectCurrentUser
} from '../../store/users/selectors'
import { getMutualFriendsCount } from '../../helpers'


const Counts: React.FC = () => {
  const friendsCount = useSelector(getFriendCount)
  const photosCount = useSelector(getPhotosCount)
  const currentUser = useSelector(selectCurrentUser)
  const user = useSelector(selectUser)
  const me = localStorage.getItem('me') || ''
  const { id } = useParams()

  if (!friendsCount && !getPhotosCount) {
    return null
  }

  return (
    <div className='counts'>
      {
        !!getMutualFriendsCount(currentUser.friends, user.friends) &&
        id !== me &&
        <CountItem
          label='общих друзей'
          count={getMutualFriendsCount(currentUser.friends, user.friends)}
        />
      }
      <CountItem label='друзей' count={friendsCount}/>
      <CountItem label='фотографии' count={photosCount}/>
    </div>
  )
}

export default Counts
