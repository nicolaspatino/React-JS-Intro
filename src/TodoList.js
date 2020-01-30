import React from 'react';
import {Todo} from './Todo';

export class TodoList extends React.Component{

    render(){
        const todos = this.props.todoList;
        const todoListLi = todos.map((todo, i) =>
            <li key={i}>
                <Todo text={todo.text} priority={todo.priority} dueDate={todo.dueDate}/><br/>
            </li>
        );
        return <ul>{todoListLi}</ul>;
    }
}