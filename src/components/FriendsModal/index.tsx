import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import './index.scss'

import FriendsTab from './FriendsTab'
import FriendModal from './FriendModal'

import { getMutualFriendsCount, mutualFriends } from '../../helpers'
import { selectCurrentUser, selectUser } from '../../store/users/selectors'
import {
  getFriends,
  getFriendCount
} from '../../store/users/selectors'


interface IProps {
  close: () => void
  tab: number
}

const FriendsModal: React.FC<IProps> = ({ close, tab }) => {
  const [currentTab, setCurrentTab] = useState(tab)
  const me = localStorage.getItem('me') || ''
  const currentUser = useSelector(selectCurrentUser)
  const user = useSelector(selectUser)
  const friends = useSelector(getFriends)
  const friendsCount = useSelector(getFriendCount)
  const mutualFriendsCount = getMutualFriendsCount(currentUser.friends, user.friends)
  const friendsMutual = mutualFriends(currentUser.friends, user.friends)
  const { id } = useParams()

  return (
    <div className='friends-modal'>
      <div className='friends-modal__container'>
        <div className='friends-modal__top'>
          <div className='friends-modal__items'>
            <FriendsTab
              title='Друзья'
              count={friendsCount}
              click={() => setCurrentTab(1)}
              isCurrent={currentTab === 1}
            />
            {
              !!mutualFriendsCount &&
              id !== me &&
              <FriendsTab
                title='Общие друзья'
                count={mutualFriendsCount}
                click={() => setCurrentTab(0)}
                isCurrent={currentTab === 0}
              />
            }
          </div>

          <i
            className="material-icons friends-modal__close"
            onClick={() => close()}
          >
            close
          </i>
        </div>

        <div className='friends-modal__bottom'>
          {
            currentTab === 1
              ? <>
                  {
                    friends.map(elem => (
                      <FriendModal user={elem} key={elem._id}/>
                    ))
                  }
                </>
              : currentTab === 0 &&
                <>
                {
                  friendsMutual?.map(elem => (
                    <FriendModal user={elem} key={elem._id}/>
                  ))
                }
              </>
          }
        </div>
      </div>
    </div>
  )
}

export default FriendsModal
