import { action } from 'typesafe-actions';
import { UsersActionTypes, IUser } from './types'
import { usersApi } from '../api'
import { Dispatch } from 'redux';


const getUserByIdSuccess = (user: IUser) => action(UsersActionTypes.GET_USER_BY_ID, user)

const geCurrentUserSuccess = (user: IUser) => action(UsersActionTypes.GET_CURRENT_USER, user)

const fetchFailure = (error: string) => action(UsersActionTypes.FETCH_FAILURE, error)

const showPreloader = () => action(UsersActionTypes.SHOW_PRELOADER)

const hidePreloader = () => action(UsersActionTypes.HIDE_PRELOADER)

export const getUserById = (userId: string) => {
  return async (dispatch: Dispatch) => {
    try {
      const me = localStorage.getItem('me') || ''

      dispatch(showPreloader())
      let currentUser = await usersApi.fetchUserById(me)
      dispatch(geCurrentUserSuccess(currentUser.data))

      if (userId === me) {
        dispatch(getUserByIdSuccess(currentUser.data))
      } else {
        let { data } = await usersApi.fetchUserById(userId)
        dispatch(getUserByIdSuccess(data))
      }

      dispatch(hidePreloader())
    } catch (error) {
      dispatch(fetchFailure(error))
    }
  }
}
