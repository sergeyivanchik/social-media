import React from 'react'

import './index.scss'


interface IProps {
  title: string
  icon: string
}

const SideBarItem: React.FC<IProps> = ({ title, icon }) => {
  return (
    <div className='side-bar-item'>
      <i className='material-icons side-bar-item__icon'>{icon}</i>
      <span className='side-bar-item__title'>{title}</span>
    </div>
  )
}

export default SideBarItem