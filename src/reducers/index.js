import { combineReducers } from 'redux'
import todos from './ToDo'
import visibilityFilter from './LinkReducer'
 
const todoApp = combineReducers({
  todos,
  visibilityFilter
})
 
export default todoApp