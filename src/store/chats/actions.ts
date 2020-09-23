import { action } from 'typesafe-actions';
import { ChatsActionTypes, IMessage } from './types'
import { chatsApi } from '../api'
import { Dispatch } from 'redux';


const getCurrentUserChatsSuccess = (chats: IMessage[]) =>
  action(ChatsActionTypes.GET_CURRENT_USER_CHATS, chats)


const fetchFailure = (error: string) => action(ChatsActionTypes.FETCH_FAILURE, error)

const showPreloader = () => action(ChatsActionTypes.SHOW_PRELOADER)

const hidePreloader = () => action(ChatsActionTypes.HIDE_PRELOADER)

export const getCurrentUserChats = () => {
  return async (dispatch: Dispatch) => {
    try {
      const me = localStorage.getItem('me') || ''

      // dispatch(showPreloader())
      let { data } = await chatsApi.fetchChatsByUser(me)
      dispatch(getCurrentUserChatsSuccess(data))

      // dispatch(hidePreloader())
    } catch (error) {
      dispatch(fetchFailure(error))
    }
  }
}

const typingMessage = (userId: string) =>
  action(ChatsActionTypes.TYPING_MESSAGE, userId)

const removeTypingMessage = (userId: string) =>
  action(ChatsActionTypes.REMOVE_TYPING_MESSAGE, userId)

export const typing = (userId: string) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(typingMessage(userId))
      setTimeout(() => dispatch(removeTypingMessage(userId)), 3000)
    } catch(error) {
      dispatch(fetchFailure(error))
    }
  }
}
