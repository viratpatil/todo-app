import React from 'react'
import Footer from './components/footer/Footer'
import AddTodo from './components/addTodo/AddToDo';
import TodoList from './components/todolist'
 
const App = () => (
  <div>
    <AddTodo />
    <TodoList />
    <Footer />
  </div>
)
 
export default App