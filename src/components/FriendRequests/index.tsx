import React, { useState } from 'react'

import './index.scss'

import { IUser } from '../../store/users/types'

import Request from './Request'
import RequestTab from './RequestTab'


interface IProps {
  incomingRequests?: IUser[]
  currentItem: number
  outgoingRequests?: IUser[]
}

const FriendRequests: React.FC<IProps> = ({ incomingRequests, currentItem, outgoingRequests }) => {
  const [currentTab, setCurrentTab] = useState(0)

  return (
    <div className='friend-requests'>
      <div className='friend-requests__top'>
        {
          currentItem === 0
            ? <>
                {
                  !!outgoingRequests?.length && !incomingRequests?.length
                    ? 'Мои заявки в друзья'
                    : 'Заявки в друзья'
                }

                {
                  (!!incomingRequests?.length || !!outgoingRequests?.length) &&
                  <span className='friend-requests__count'>
                    {(incomingRequests?.length || 0) + (outgoingRequests?.length || 0)}
                  </span>
                }
              </>
            : <>
                <RequestTab
                  title='Все заявки'
                  count={(outgoingRequests?.length || 0) + (incomingRequests?.length || 0)}
                  click={() => setCurrentTab(0)}
                  isCurrent={currentTab === 0}
                />
                {
                  !!incomingRequests?.length &&
                  <RequestTab
                    title='Входящие'
                    count={incomingRequests?.length}
                    click={() => setCurrentTab(1)}
                    isCurrent={currentTab === 1}
                  />
                }
                {
                  !!outgoingRequests?.length &&
                  <RequestTab
                    title='Исходящие'
                    count={outgoingRequests?.length}
                    click={() => setCurrentTab(2)}
                    isCurrent={currentTab === 2}
                  />
                }
              </>

        }
      </div>

      <div className='friend-requests__container'>
        {
          currentTab === 0 &&
          <>
            {
              incomingRequests?.map(elem => (
                <Request user={elem} key={elem._id}/>
              ))
            }
            {
              outgoingRequests?.map(elem => (
                <Request user={elem} outgoing={true} key={elem._id}/>
              ))
            }
          </>
        }
        {
          currentTab === 1 &&
          incomingRequests?.map(elem => (
            <Request user={elem} key={elem._id} currentTab={currentTab}/>
          ))
        }
        {
          currentTab === 2 &&
          outgoingRequests?.map(elem => (
            <Request user={elem} outgoing={true} key={elem._id}/>
          ))
        }
      </div>
    </div>
  )
}

export default FriendRequests
