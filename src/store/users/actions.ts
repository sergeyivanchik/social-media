import { action } from 'typesafe-actions';
import { UsersActionTypes, IUser } from './types'
import { usersApi } from '../api'
import { Dispatch } from 'redux';


const getUserByIdSuccess = (user: IUser) => action(UsersActionTypes.GET_USER_BY_ID, user)

const fetchFailure = (error: string) => action(UsersActionTypes.FETCH_FAILURE, error)

const showPreloader = () => action(UsersActionTypes.SHOW_PRELOADER)

const hidePreloader = () => action(UsersActionTypes.HIDE_PRELOADER)

export const getUserById = (userId: string) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(showPreloader())
      const { data } = await usersApi.fetchUserById(userId)
      dispatch(getUserByIdSuccess(data))
      dispatch(hidePreloader())
    } catch (error) {
      dispatch(fetchFailure(error))
    }
  }
}
