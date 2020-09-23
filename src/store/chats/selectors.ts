import { createSelector } from "reselect"
import { IChats } from './types'


const chats = (state: { chats: { data: IChats[] } }): IChats[]  => state.chats.data

export const selectChats = createSelector(
  chats,
  (currentChats): IChats[] => currentChats
)
