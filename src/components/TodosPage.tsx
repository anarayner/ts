import React, {FC, useEffect, useState} from 'react';
import {ITodo, IUser} from "../types/types";
import axios from "axios";
import List from "./List";
import TodoItem from "./TodoItem";

const TodosPage: FC = () => {
    const [todos, setTodos] = useState<ITodo[]>([])

    useEffect(() => {
        fetchTodos()
    }, []);

    async function fetchTodos(){
        try {
            const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=5')
            setTodos(response.data)
        }catch{

        }
    }
    return (
        <div>
            <List items={todos}
                  renderItem={(todo:ITodo) => <TodoItem todo={todo} key={todo.id}/>}
            />
        </div>
    );
};

export default TodosPage;
