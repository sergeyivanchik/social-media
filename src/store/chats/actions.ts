import { action } from 'typesafe-actions';
import { ChatsActionTypes, IMessage, IChat } from './types'
import { chatsApi } from '../api'
import { Dispatch } from 'redux';


const getCurrentUserChatsSuccess = (chats: IChat[]) =>
  action(ChatsActionTypes.GET_CURRENT_USER_CHATS, chats)

const getCurrentUserChatSuccess = (chat: IChat) =>
  action(ChatsActionTypes.GET_CURRENT_USER_CHAT, chat)


const fetchFailure = (error: string) => action(ChatsActionTypes.FETCH_FAILURE, error)

const showPreloader = () => action(ChatsActionTypes.SHOW_PRELOADER)

const hidePreloader = () => action(ChatsActionTypes.HIDE_PRELOADER)

const getCurrenChatMessagesSuccess = (messages: IMessage[]) =>
  action(ChatsActionTypes.GET_CURREN_CHAT_MESSAGES, messages)

export const removeCurrentUserChats = () =>
  action(ChatsActionTypes.REMOVE_CURRENT_USER_CHATS)

export const removeCurrentUserChat = () =>
  action(ChatsActionTypes.REMOVE_CURRENT_USER_CHAT)

export const removeCurrentChatMessages = () =>
  action(ChatsActionTypes.REMOVE_CURRENT_CHAT_MESSAGES)

export const getCurrentUserChat = (chatId: string) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(showPreloader())
      let { data } = await chatsApi.fetchCurrentChat(chatId)
      dispatch(getCurrentUserChatSuccess(data))

      dispatch(hidePreloader())
    } catch (error) {
      dispatch(fetchFailure(error))
    }
  }
}

export const getCurrenChatMessages = (chatId: string) => {
  return async (dispatch: Dispatch) => {
    try {
      const { data } = await chatsApi.fetchMessagesByChat(chatId)
      dispatch(getCurrenChatMessagesSuccess(data))
    } catch (error) {
      dispatch(fetchFailure(error))
    }
  }
}

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
