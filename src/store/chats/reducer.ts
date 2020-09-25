import { Reducer } from 'redux';
import { ChatsState, ChatsActionTypes } from './types'

const initialState: ChatsState = {
  data: [],
  loading: false,
  errors: '',
  typing: [],
  messages: [],
  currentChat: {}
}

export const chatsReducer: Reducer<ChatsState> = (state = initialState, action) => {
  switch(action.type) {
    case ChatsActionTypes.GET_CURRENT_USER_CHAT:
      return { ...state, currentChat: action.payload }

    case ChatsActionTypes.GET_CURRENT_USER_CHATS:
      return { ...state, data: action.payload }

    case ChatsActionTypes.GET_CURREN_CHAT_MESSAGES:
      return { ...state, messages: action.payload }

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