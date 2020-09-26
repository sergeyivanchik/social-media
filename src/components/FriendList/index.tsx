import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import './index.scss'

import Tab from './Tab'

import UserFriend from './UserFiend'
import Preloader from '../Preloader'

import {
  getFriends,
  getFriendCount,
  getOnlineFriendCount,
  getOnlineFriends,
  getLoading
} from '../../store/users/selectors'


const FriendList: React.FC = () => {
  const [currentTab, setCurrentTab] = useState(0)

  const friends = useSelector(getFriends)
  const friendsCount = useSelector(getFriendCount)
  const onlineFriends = useSelector(getOnlineFriends)
  const onlineFriendsCount = useSelector(getOnlineFriendCount)
  const loading = useSelector(getLoading)

  return (
    <div className='friend-list'>
      {
        loading
          ? <Preloader/>
          : <>
              <div className='friend-list__top'>
                <Tab
                  title='Все друзья'
                  count={friendsCount}
                  click={() => setCurrentTab(0)}
                  isCurrent={currentTab === 0}
                />
                {
                  !!onlineFriendsCount &&
                  <Tab
                    title='Друзья онлайн'
                    count={onlineFriendsCount}
                    click={() => setCurrentTab(1)}
                    isCurrent={currentTab === 1}
                  />
                }
              </div>

              <div className='friend-list__container'>
                {
                  currentTab === 0
                    ? <>
                        {
                          friends.map(elem => (
                            <UserFriend user={elem} key={elem._id}/>
                          ))
                        }
                      </>
                    : <>
                        {
                          onlineFriends.map(elem => (
                            <UserFriend user={elem} key={elem._id}/>
                          ))
                        }
                      </>
                }
              </div>
            </>
      }
    </div>
  )
}

export default FriendList
