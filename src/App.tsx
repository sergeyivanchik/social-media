import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import './App.scss'

import Header from './components/Header'
import LeftSideBar from './components/LeftSideBar'
import Photo from './components/Photo'
import UserInfo from './components/UserInfo'
import Counts from './components/Counts'
import Friends from './components/Friends'
import Preloader from './components/Preloader'

import { getUserById } from './store/users/actions'
import { getLoading } from './store/users/selectors'


const App: React.FC = () => {
  const dispatch = useDispatch()

  const loading = useSelector(getLoading)

  useEffect(() => {
    dispatch(getUserById('5f63bd4942f5761b1094f485'))
  }, [])

  if (loading) {
    return <Preloader/>
  }

  return (
    <>
      <Header/>

      <div className='container'>
        <div className='wrapper'>
          <LeftSideBar/>

          <div className='narrow-column'>
            <Photo/>
            <Friends/>
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
