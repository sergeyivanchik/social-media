import React from 'react'
import { Link } from 'react-router-dom'

import './index.scss'


interface IProps {
  title: string
  icon: string
  link: string
  click: () => void
}

const SideBarItem: React.FC<IProps> = ({ title, icon, link, click }) => {
  return (
    <Link to={`/${link}`} onClick={() => click()}>
      <div className='side-bar-item'>
        <i className='material-icons side-bar-item__icon'>{icon}</i>
        <span className='side-bar-item__title'>{title}</span>
      </div>
    </Link>
  )
}

export default SideBarItem
