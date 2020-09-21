import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import './index.scss'

import SmallPhoto from './SmallPhoto'

import { getUserInfo, getPhotos, getPhotosCount } from '../../store/users/selectors'


const Photos: React.FC = () => {
  const userInfo = useSelector(getUserInfo)
  const photos = useSelector(getPhotos)
  const photosCount = useSelector(getPhotosCount)
  const me = localStorage.getItem('me') || ''
  const { id } = useParams()

  if (!photosCount) {
    return null
  }

  return (
    <>
      <div className='photos'>
        <div className='photos__wrapper'>
          <div className='photos__panel'>
            <div className='photos__top'>
              <span className='photos__title'>
                {
                  me === id
                    ? 'Мои фотографии'
                    : `Фотографии ${userInfo.name}`
                }
              </span>

              <span className='photos__count'>
                {photosCount}
              </span>
            </div>

            <div className='photos__bottom'>
              {
                photos.slice(0, 4).map((elem, index) => (
                  <SmallPhoto image={elem.photo} key={index}/>
                ) )
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Photos
