import React from 'react'

import './index.scss'
import CountItem from './CountItem'


const Counts: React.FC = () => {
  return (
    <div className='counts'>
      <CountItem label='друзей' count={10}/>
      <CountItem label='фотографии' count={3}/>
    </div>
  )
}

export default Counts
