import { createSelector } from "reselect"
import { IChats } from './types'


const chats = (state: { chats: { data: IChats[] } }): IChats[]  => state.chats.data
const typings = (state: { chats: { typing: string[] } }): string[]  => state.chats.typing

export const selectChats = createSelector(
  chats,
  (currentChats): IChats[] => currentChats
)

export const getTyping = createSelector(
  typings,
  (typingMessages): string[] => typingMessages
)
