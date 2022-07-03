import React, {FC} from 'react';
import {ITodo, IUser} from "../types/types";

interface TodoItemProps{
    todo: ITodo;
}

const TodoItem: FC<TodoItemProps> = ({todo}) => {
    return (
        <div style={{padding: '20px', border: '1px solid red', margin: '5px'}}>
            {todo.id}. {todo.title}   {todo.completed}
        </div>
    );
};

export default TodoItem;
