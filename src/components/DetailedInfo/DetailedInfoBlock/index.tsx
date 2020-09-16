import React from 'react'

import './index.scss'


interface IProps {
  title: string
}

const DetailedInfoBlock: React.FC<IProps> = ({ title }) => {
  return (
    <div className='detailed-info-block'>
      <div className='detailed-info-block__top'>
        <div className='detailed-info-block__title'>
          {title}
        </div>

        <div className='detailed-info-block__edit'>
          Редактировать
        </div>
      </div>
    </div>
  )
}

export default DetailedInfoBlock
