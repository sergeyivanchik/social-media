import React from 'react'

import './index.scss'


interface IProps {
  name: string
  photo: string
}

const Friend: React.FC<IProps> = ({ name, photo }) => {
  return (
    <div className='friend'>
      <div className='friend__photo'>
        <img src={photo} alt='friend ava'/>
      </div>

      <div className='friend__name'>
        {name}
      </div>
    </div>
  )
}

export default Friend