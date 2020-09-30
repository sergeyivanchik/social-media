import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import './index.scss'

import Friend from './Friend'

import {
  getFriends,
  getFriendCount,
  getOnlineFriendCount,
  getOnlineFriends,
  selectUser,
  selectCurrentUser
} from '../../store/users/selectors'
import { mutualFriends, getMutualFriendsCount, getUserAvatar } from '../../helpers'


const Friends: React.FC = () => {
  const friends = useSelector(getFriends)
  const friendsCount = useSelector(getFriendCount)
  const onlineFriends = useSelector(getOnlineFriends)
  const onlineFriendsCount = useSelector(getOnlineFriendCount)
  const me = localStorage.getItem('me') || ''
  const { id } = useParams()
  const user = useSelector(selectUser)
  const currentUser = useSelector(selectCurrentUser)
  const currentMutualFriends = mutualFriends(currentUser.friends, user.friends)

  return (
    <div className='friends'>
      <div className='friends__top'>
        <div className='friends__count'>
          <span className='friends__title'>Друзья</span>
          <span className='friends__value'>{friendsCount}</span>
        </div>
      </div>

      <div className='friends__list'>
        <div className='friends__row'>
          {
            friends.slice(0, 2).map(elem => (
                <Friend
                  key={elem._id}
                  name={elem.name || ''}
                  surname={elem.surname || ''}
                  photo={getUserAvatar(elem) || ''}
                  id={elem._id || ''}
                />
            ))
          }
        </div>

        <div className='friends__row'>
          {
            friends.slice(3, 5).map(elem => (
                <Friend
                  key={elem._id}
                  name={elem.name || ''}
                  surname={elem.surname || ''}
                  photo={getUserAvatar(elem) || ''}
                  id={elem._id || ''}
                />
            ))
          }
        </div>
      </div>

      {
        !!onlineFriendsCount &&
        me === id &&
        <div className='friends__online'>
          <div className='friends__top'>
            <div className='friends__count'>
              <span className='friends__title'>Онлайн</span>
              <span className='friends__value'>
                {onlineFriendsCount}
              </span>
            </div>
          </div>

          <div className='friends__list'>
            <div className='friends__row'>
              {
                onlineFriends.slice(0, 2).map(elem => (
                    <Friend
                      key={elem._id}
                      name={elem.name || ''}
                      surname={elem.surname || ''}
                      photo={getUserAvatar(elem) || ''}
                      id={elem._id || ''}
                    />
                ))
              }
            </div>

            <div className='friends__row'>
              {
                onlineFriends.slice(3, 5).map(elem => (
                    <Friend
                      key={elem._id}
                      name={elem.name || ''}
                      surname={elem.surname || ''}
                      photo={getUserAvatar(elem) || ''}
                      id={elem._id || ''}
                    />
                ))
              }
            </div>
          </div>
        </div>
      }

      {
        !!currentMutualFriends?.length &&
        me !== id &&
        <div className='friends__mutual'>
          <div className='friends__top'>
            <div className='friends__count'>
              <span className='friends__title'>Общие друзья</span>
              <span className='friends__value'>
                {getMutualFriendsCount(currentUser.friends, user.friends)}
              </span>
            </div>
          </div>

          <div className='friends__list'>
            <div className='friends__row'>
              {
                currentMutualFriends.slice(0, 2).map(elem => (
                    <Friend
                      key={elem._id}
                      name={elem.name || ''}
                      surname={elem.surname || ''}
                      photo={getUserAvatar(elem) || ''}
                      id={elem._id || ''}
                    />
                ))
              }
            </div>
          </div>
        </div>
      }
    </div>
  )
}

export default Friends
