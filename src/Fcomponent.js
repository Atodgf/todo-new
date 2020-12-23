import React from 'react'

export default function Fcomponent(props) {
    return (
        <div>
            <ul>
                {props.todos.map(todo =>{
                    return <li>{todo.id}. {todo.firstname} {todo.lastname}</li>
                })}
            </ul>
        </div>
    )
}
