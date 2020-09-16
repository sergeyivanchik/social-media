import React from 'react'

import './index.scss'

import DetailedInfoBlock from './DetailedInfoBlock'


const DetailedInfo: React.FC = () => {
  return (
    <div className='detailed-info'>
      <DetailedInfoBlock title='Основная информация'/>
    </div>
  )
}

export default DetailedInfo