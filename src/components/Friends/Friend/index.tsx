import React from 'react'

import './index.scss'

import emptyAvatar from '../../../images/empty_avatar.png'


interface IProps {
  name: string
  photo: string,
  surname: string
}

const Friend: React.FC<IProps> = ({ name, photo, surname }) => {
  return (
    <div className='friend'>
      <div className='friend__photo'>
        <img src={photo || emptyAvatar} alt='friend ava'/>
      </div>

      <div className='friend__name'>
        {name}
      </div>
    </div>
  )
}

export default Friend