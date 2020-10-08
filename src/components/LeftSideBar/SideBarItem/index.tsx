import React from 'react'
import { Link } from 'react-router-dom'

import './index.scss'


interface IProps {
  title: string
  icon: string
  link: string
  click: () => void
  count?: number
}

const SideBarItem: React.FC<IProps> = ({ title, icon, link, click, count }) => {
  return (
    <Link to={`/${link}`} onClick={() => click()}>
      <div className='side-bar-item'>
        <div className='side-bar-item__left'>
          <i className='material-icons side-bar-item__icon'>
            {icon}
          </i>
          <span className='side-bar-item__title'>
            {title}
          </span>
        </div>

        {
          !!count &&
          <div className='side-bar-item__badge'>
            {
              count > 99 ? '99+' : count
            }
          </div>
        }
      </div>
    </Link>
  )
}

export default SideBarItem
