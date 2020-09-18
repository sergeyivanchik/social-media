import React from 'react'
import { useSelector } from 'react-redux'

import './index.scss'

import CountItem from './CountItem'

import { getFriendCount, getPhotosCount } from '../../store/users/selectors'


const Counts: React.FC = () => {
  const friendsCount = useSelector(getFriendCount)
  const photosCount = useSelector(getPhotosCount)

  return (
    <div className='counts'>
      <CountItem label='друзей' count={friendsCount}/>
      <CountItem label='фотографии' count={photosCount}/>
    </div>
  )
}

export default Counts
