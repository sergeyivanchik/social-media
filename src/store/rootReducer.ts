import { combineReducers } from 'redux'
import { usersReducer } from './users/reducer'
import { chatsReducer } from './chats/reducer'


const rootReducer = combineReducers({
  users: usersReducer,
  chats: chatsReducer
})

export default rootReducer
