import { Reducer } from 'redux';
import { ChatsState, ChatsActionTypes } from './types'

const initialState: ChatsState = {
  data: [],
  loading: false,
  errors: '',
  typing: []
}

export const chatsReducer: Reducer<ChatsState> = (state = initialState, action) => {
  switch(action.type) {
    case ChatsActionTypes.GET_CURRENT_USER_CHATS:
      return { ...state, data: action.payload }

    // case UsersActionTypes.GET_CURRENT_USER:
    //   return { ...state, me: action.payload }

    case ChatsActionTypes.FETCH_FAILURE:
      return { ...state, errors: action.payload }

    case ChatsActionTypes.SHOW_PRELOADER:
      return { ...state, loading: true }

    case ChatsActionTypes.HIDE_PRELOADER:
      return { ...state, loading: false }

    case ChatsActionTypes.TYPING_MESSAGE:
      return { ...state, typing: [...state.typing, action.payload] }

    case ChatsActionTypes.REMOVE_TYPING_MESSAGE:
      const newTyping = state.typing.filter(elem => elem !== action.payload)
      return { ...state, typing: newTyping || []}

    default:
      return state
  }
}