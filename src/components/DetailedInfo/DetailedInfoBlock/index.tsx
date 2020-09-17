import React, { ReactNode } from 'react'

import './index.scss'


interface IProps {
  title: string
  children: ReactNode
}

const DetailedInfoBlock: React.FC<IProps> = ({ title, children }) => {
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

      <div className='detailed-info-block__items'>
        {children}
      </div>
    </div>
  )
}

export default DetailedInfoBlock
