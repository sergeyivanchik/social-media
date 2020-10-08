import React, { ReactNode, useState } from 'react'
import { useSelector } from 'react-redux'

import './index.scss'

import { selectUser } from '../../../store/users/selectors'


interface IProps {
  title: string
  children: ReactNode
}

const DetailedInfoBlock: React.FC<IProps> = ({ title, children }) => {
  const [isHover, setIsHover] = useState(false)

  const me = localStorage.getItem('me') || ''
  const user = useSelector(selectUser)

  return (
    <div className='detailed-info-block'>
      <div
        className='detailed-info-block__top'
        onMouseOver={() => me === user._id && setIsHover(true)}
        onMouseLeave={() => isHover && setIsHover(false)}
      >
        <div className='detailed-info-block__title'>
          {title}
        </div>

        <div className={`detailed-info-block__edit ${isHover ? 'detailed-info-block__edit_show' : ''}`}>
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
