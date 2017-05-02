import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { cssTodoList, cssTodoBody } from '../styles/todoBoard.scss';

export const Todo = ({ onClick, completed, text }) => (
  <li className="cssTodoBody"
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    {text}
  </li>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}


export const TodoList = ({ todos, onTodoClick }) => (
  <ul className="cssTodoList">
    {todos.map(todo =>
      <Todo
        key={todo.id}
        {...todo}
        onClick={() => onTodoClick(todo.id)}
      />
    )}
  </ul>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onTodoClick: PropTypes.func.isRequired
}

// export default TodoList