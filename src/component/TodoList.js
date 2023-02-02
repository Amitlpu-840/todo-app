import React from 'react'

function TodoList({ todos, setTodos, setEditTodos }) {

    const handleDelete = ({ id }) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }

    const handleComplete = (todo) => {

        setTodos(
            todos.map((task) => {
                if (task.id === todo.id) {
                    return { ...task, completed: !task.completed };
                }
                return task;

            })
        )
    }
    const handleEdit = ({ id }) => {
        const findTodo = todos.find((todo) => todo.id === id);
        setEditTodos(findTodo);
    }

    return (
        <div>
            {todos.map((todo) => (
                <li className='list-item' key={todo.id}>
                    <input
                        type="text"
                        value={todo.title}
                        className={`list ${todo.completed ? "complete" : ""}`}
                        onChange={(event) => event.preventDefault()}
                    />

                    <button className='button-complete task-button' onClick={() => handleComplete(todo)} >
                        <i className='fa fa-check-circle' ></i>
                    </button>
                    <button className='button-edit task-button' onClick={() => handleEdit(todo)} >
                        <i className='fa fa-edit' ></i>
                    </button>
                    <button className='button-delete task-button' onClick={() => handleDelete(todo)} >
                        <i className='fa fa-trash' ></i>
                    </button>

                </li>
            ))}
        </div>
    )
}

export default TodoList