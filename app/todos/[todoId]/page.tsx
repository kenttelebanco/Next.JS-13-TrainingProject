import React from 'react'
import { Todo } from '../../../typings';
import notFound from './not-found';

export const dynamicParams = true;

type PropPage = {
    params: {
        todoId: string;
    };
};

const fetchTodo = async(todoId: string) =>{
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`, {next: {revalidate: 60}}
    );
    const todo: Todo = await res.json();
    return todo;
};

async function TodoPage({params: {todoId}}: PropPage) {
    const todo = await fetchTodo(todoId);

    if (!todo.id) return notFound();
  return (
    <div className="p-10 bg-black border-2 m-2 text-white">
        <p>
            #{todo.id}: {todo.title}
        </p>
        <p>
        Completed: {todo.completed ? "Yes" : "No"}
        </p> 
        <p className="border-t border-white mt-5 text-right">
            By User: {todo.userId}
        </p>
    </div>
  );
}

export default TodoPage;

export async function generateStaticParams(){
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    const todos: Todo[] = await res.json();

    const trimmedTodos = todos.splice(0,10);

    return trimmedTodos.map((todo) => ({
    
        todoId: todo.id.toString(),
    }));
}
