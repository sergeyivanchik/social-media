import React from 'react'

import './index.scss'


const Preloader: React.FC = () => {
  return (
    <div className='preloader'>
      <div className='preloader-wrapper small active'>
        <div className='spinner-layer spinner-blue-only'>
          <div className='circle-clipper left'>
            <div className='circle'/>
          </div>
          <div className='gap-patch'>
            <div className='circle'/>
          </div>
          <div className='circle-clipper right'>
            <div className='circle'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Preloader
