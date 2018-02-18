import React from "react";
import PropTypes from "prop-types";
import ToDo from "../todo/ToDo";

const ToDoList = ({todos, onToDoClick}) => {
    return (
        <ul>
            {
                todos.map((todo, index) => (
                    <ToDo key={index} {...todo}  onClick={() => onToDoClick(index)}></ToDo>
                ))
            }
        </ul>
    )
}

ToDoList.propTypes = {
    todos:PropTypes.arrayOf(
        PropTypes.shape({
            id:PropTypes.number.isRequired,
            completed:PropTypes.bool.isRequired,
            text:PropTypes.string.isRequired,

    })),
    onToDoClick: PropTypes.func.isRequired
}

export default ToDoList;