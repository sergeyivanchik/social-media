import React from 'react'

import './index.scss'

import InfoItemValue from './InfoItemValue'

import { IUser } from '../../store/users/types'

interface IProps {
  label: string
  value?: string
  values?: IUser[]
  isLink: boolean
}

const InfoItem: React.FC<IProps> = ({ label, value, values, isLink }) => {

  if (!value && !values?.length) {
    return null
  }
  console.log('value values', value, values);

  return (
    <div className='info-item'>
      <div className='info-item__label'>
        {label}:
      </div>

      <div className='info-item__values'>
        {
          !!values?.length
            ? values.map((elem, index) => {
              return (
                <div className='info-item__value' key={index}>
                  <InfoItemValue
                    value={`${elem.name} ${elem.surname}`}
                    isLink={isLink}
                  />{index !== values.length-1 && ',\u00A0'}
                </div>
              )
            })
            : <InfoItemValue value={value} isLink={isLink}/>
        }
      </div>
    </div>
  )
}

export default InfoItem