import React, { useState } from 'react'

import './index.scss'

import DetailedInfo from '../DetailedInfo'
import InfoItem from '../InfoItem'


const UserInfo: React.FC = () => {
  const [isShow, setIsShow] = useState<boolean>(false)

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
                Сергей Иванчик
              </span>
              <span className='user-info__online'>
                заходил 10 минут назад
              </span>
            </div>

            <div className='user-info__status'>
              123
            </div>
          </div>

          <div className='user-info__short-info'>
            <InfoItem label='День рождения' value='23 марта 1994 г.' isLink={true}/>
            <InfoItem label='Семейное положение' value='не женат' isLink={true}/>
            <InfoItem label='Сайт' value='сайтсайтсайт' isLink={false}/>
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