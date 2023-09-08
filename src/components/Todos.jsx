import React from 'react'
import Todo from './Todo'

const Todos = ({ todos, removeTodo }) => {
    return (
        <div className='bg-base-300 h-[25rem] overflow-y-auto min-w-full p-8 rounded-md flex-col flex gap-4'>
            {
                todos.map((todo) => <Todo removeTodo={removeTodo} key={todo.id} id={todo.id} todo={todo.note} />)
            }
        </div>
    )
}

export default Todos