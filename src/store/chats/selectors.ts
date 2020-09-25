import { createSelector } from "reselect"
import { IChat, IMessage } from './types'


const chats = (state: { chats: { data: IChat[] } }): IChat[]  => state.chats.data
const typings = (state: { chats: { typing: string[] } }): string[]  => state.chats.typing
const messages = (state: { chats: { messages: IMessage[] } }): IMessage[]  => state.chats.messages
const currentChat = (state: { chats: { currentChat: IChat } }): IChat  => state.chats.currentChat
const loading = (state: { chats: {loading: boolean } }): boolean => state.chats.loading

export const getLoading = createSelector(
  loading,
  (loading): boolean => loading
)

export const selectChats = createSelector(
  chats,
  (currentChats): IChat[] => currentChats
)

export const getTyping = createSelector(
  typings,
  (typingMessages): any[] => typingMessages
)

export const getMessages = createSelector(
  messages,
  (messages): IMessage[] => messages
)

export const getCurrentChat = createSelector(
  currentChat,
  (currentChat): IChat => currentChat
)
