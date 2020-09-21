import React from 'react'

import './index.scss'

interface IProps {
  image?: string
}

const SmallPhoto: React.FC<IProps> = ({ image }) => {
  return (
    <div className='small-photo'>
      <img src={image} alt='small photo'/>
    </div>
  )
}

export default SmallPhoto