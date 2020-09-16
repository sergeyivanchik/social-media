import React from 'react'

import './App.scss'

import Header from './components/Header'
import LeftSideBar from './components/LeftSideBar'
import Photo from './components/Photo'
import UserInfo from './components/UserInfo'
import Counts from './components/Counts'


const App: React.FC = () => {
  return (
    <>
      <Header/>

      <div className='container'>
        <div className='wrapper'>
          <LeftSideBar/>

          <div className='narrow-column'>
            <Photo/>
          </div>

          <div className='wide-column'>
            <UserInfo/>
            <Counts/>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
