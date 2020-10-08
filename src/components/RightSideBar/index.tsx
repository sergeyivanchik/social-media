import React, { useState } from 'react'

import './index.scss'
import RightSideBarItem from './RightSideBarItem'


interface IProps {
  items: any[]
  currentItem: number
  setCurrentItem: (index: number) => void
}

const RightSideBar: React.FC<IProps> = ({ items, currentItem, setCurrentItem }) => {

  return (
    <div className='right-side-bar'>
      {
        items.map((elem, index) => (
          <RightSideBarItem
            title={elem?.title}
            key={index}
            click={() => setCurrentItem(index)}
            isCurrent={currentItem === index}
            count={elem?.count}
          />
        ))
      }
    </div>
  )
}

export default RightSideBar
