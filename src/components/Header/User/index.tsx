import React from 'react'

import './index.scss'


const User: React.FC = () => {
  return (
    <div className='user'>
      <span className='user__name'>Сергей</span>
      <img
        src='https://sun4-15.userapi.com/impf/c846217/v846217021/9c83a/K0TyWZdIJCU.jpg?size=200x0&quality=90&crop=13,23,1601,1601&sign=80c4322e508befdb30e49629630a4584&ava=1'
        alt='user avatar'
        className='user__avatar'
      />
      <i className='material-icons user__arrow'>expand_more</i>
    </div>
  )
}

export default User