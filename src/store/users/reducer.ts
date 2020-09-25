import { Reducer } from 'redux';
import { UsersState, UsersActionTypes } from './types'

const initialState: UsersState = {
  me: {
    online: ''
  },
  data: {
    online: ''
  },
  loading: false,
  errors: ''
}

export const usersReducer: Reducer<UsersState> = (state = initialState, action) => {
  switch(action.type) {
    case UsersActionTypes.GET_USER_BY_ID:
      return { ...state, data: action.payload }

    case UsersActionTypes.GET_CURRENT_USER:
      return { ...state, me: action.payload }

    case UsersActionTypes.FETCH_FAILURE:
      return { ...state, errors: action.payload }

    case UsersActionTypes.SHOW_PRELOADER:
      return { ...state, loading: true }

    case UsersActionTypes.HIDE_PRELOADER:
      return { ...state, loading: false }

    case UsersActionTypes.REMOVE_USER:
      return { ...state, me: { online: '' }, data: { online: '' } }

    default:
      return state
  }
}