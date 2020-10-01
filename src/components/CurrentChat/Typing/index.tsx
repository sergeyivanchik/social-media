import React from 'react'
import { useSelector } from 'react-redux'

import './index.scss'

import { getTyping } from '../../../store/chats/selectors'
import { IUser } from '../../../store/users/types'


interface IProps {
  currentUser?: IUser
}

const Typing: React.FC<IProps> = ({ currentUser }) => {
  const typing = useSelector(getTyping)

  if (typing?.find(elem => elem === currentUser?._id)) {
    return (
      <div className='typing'>
        {currentUser?.name} печатает сообщение...
      </div>
    )
  }

  return <></>
}

export default Typing
