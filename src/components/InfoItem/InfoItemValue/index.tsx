import React from 'react'

import './index.scss'


interface IProps {
  value?: string,
  isLink:boolean
}

const InfoItemValue: React.FC<IProps> = ({ value, isLink }) => {
  return (
    <div className={`info-item-value ${isLink ? 'info-item-value__link' : ''}`}>
      {value}
    </div>
  )
}

export default InfoItemValue
