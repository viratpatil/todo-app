import { connect } from 'react-redux'
import ToDoList from "./ToDoList";
import {toggleTodo} from "../../actions";

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
      case 'SHOW_COMPLETED':
        return todos.filter(t => t.completed)
      case 'SHOW_ACTIVE':
        return todos.filter(t => !t.completed)
      case 'SHOW_ALL':
      default:
        return todos
    }
  }

const mapStateToProps = (state) => {
    return {
        todos: getVisibleTodos(state.todos, state.visibilityFilter)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onToDoClick: id => {
          dispatch(toggleTodo(id))
        }
      }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);