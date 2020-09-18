import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';

import LeftSideBar from '../components/LeftSideBar'
import Photo from '../components/Photo'
import UserInfo from '../components/UserInfo'
import Counts from '../components/Counts'
import Friends from '../components/Friends'
import Preloader from '../components/Preloader'

import { getUserById } from '../store/users/actions'
import { getLoading } from '../store/users/selectors'


const User: React.FC = () => {
  const dispatch = useDispatch()

  const { id } = useParams()

  const loading = useSelector(getLoading)

  useEffect(() => {
    dispatch(getUserById(id))
  }, [id])

  if (loading) {
    return <Preloader/>
  }

  return (
    <>
      <LeftSideBar/>

      <div className='narrow-column'>
        <Photo/>
        <Friends/>
      </div>

      <div className='wide-column'>
        <UserInfo/>
        <Counts/>
      </div>
    </>
  );
}

export default User;
