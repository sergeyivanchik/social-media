import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import './index.scss'

import DetailedInfo from '../DetailedInfo'
import InfoItem from '../InfoItem'

import { getUserInfo } from '../../store/users/selectors'
import { getBirthday, getOnlineDate } from '../../helpers'


const UserInfo: React.FC = () => {
  const [isShow, setIsShow] = useState<boolean>(false)

  const userInfo = useSelector(getUserInfo)

  const clickHandler = (): void => {
    setIsShow(prev => !prev)
  }

  return (
    <>
      <div className='user-info'>
        <div className='user-info__wrapper'>
          <div className='user-info__panel'>
            <div className='user-info__top'>
              <span className='user-info__name'>
                {userInfo.name} {userInfo.surname}
              </span>
              <span className='user-info__online'>
                {
                  userInfo.online === 'online'
                    ? 'онлайн'
                    : getOnlineDate(+userInfo.online) || ''
                }
              </span>
            </div>

            <div className={`user-info__status ${!userInfo.status && 'user-info__status_empty'}`}>
              {userInfo.status || 'изменить статус'}
            </div>
          </div>

          <div className='user-info__short-info'>
            <InfoItem
              label='День рождения'
              value={getBirthday(userInfo.birthday) || ''}
              isLink={true}
            />
            <InfoItem
              label='Семейное положение'
              value={userInfo.marital_status}
              isLink={true}
            />
            <InfoItem
              label='Сайт'
              value={userInfo.site}
              isLink={false}
            />
          </div>

          <div className='user-info__show-more' onClick={clickHandler}>
            {
              !isShow
                ? 'Показать подробную информацию'
                : 'Скрыть подробную информацию'
            }
          </div>
        </div>
      </div>

      {
        isShow &&
        <DetailedInfo/>
      }
    </>
  )
}

export default UserInfo