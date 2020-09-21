import React from 'react'
import { useSelector } from 'react-redux'

import './index.scss'

import Friend from './Friend'

import {
  getFriends,
  getFriendCount,
  getOnlineFriendCount,
  getOnlineFriends
} from '../../store/users/selectors'


const Friends: React.FC = () => {
  const friends = useSelector(getFriends)
  const friendsCount = useSelector(getFriendCount)
  const onlineFriends = useSelector(getOnlineFriends)
  const onlineFriendsCount = useSelector(getOnlineFriendCount)

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
            friends.slice(0, 2).map(elem => {
              const avatar = elem.photos?.find(photo => photo.isAvatar)

              return (
                <Friend
                  key={elem._id}
                  name={elem.name || ''}
                  surname={elem.surname || ''}
                  photo={avatar?.photo || ''}
                  id={elem._id || ''}
                />
              )
            })
          }
        </div>

        <div className='friends__row'>
          {
            friends.slice(3, 5).map(elem => {
              const avatar = elem.photos?.find(photo => photo.isAvatar)

              return (
                <Friend
                  key={elem._id}
                  name={elem.name || ''}
                  surname={elem.surname || ''}
                  photo={avatar?.photo || ''}
                  id={elem._id || ''}
                />
              )
            })
          }
        </div>
      </div>

      {
        !!onlineFriendsCount &&
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
                onlineFriends.slice(0, 2).map(elem => {
                  const avatar = elem.photos?.find(photo => photo.isAvatar)

                  return (
                    <Friend
                      key={elem._id}
                      name={elem.name || ''}
                      surname={elem.surname || ''}
                      photo={avatar?.photo || ''}
                      id={elem._id || ''}
                    />
                  )
                })
              }
            </div>

            <div className='friends__row'>
              {
                onlineFriends.slice(3, 5).map(elem => {
                  const avatar = elem.photos?.find(photo => photo.isAvatar)

                  return (
                    <Friend
                      key={elem._id}
                      name={elem.name || ''}
                      surname={elem.surname || ''}
                      photo={avatar?.photo || ''}
                      id={elem._id || ''}
                    />
                  )
                })
              }
            </div>
          </div>
        </div>
      }
    </div>
  )
}

export default Friends