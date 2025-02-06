"use client";

import React from "react";
import Form from "../components/Form";
import Header from "../components/Header";
import Todohero from "../components/Todohero";
import Todolist from "../components/Todolist";

function Home() {
    const [todos, setTodos] = React.useState([
        // dummy todos
        // { title: "Some task", id: window.crypto.randomUUID()},
        // {
        //     title: "Some other task",
        //     id: window.crypto.randomUUID(),
        //     is_completed: true,
        // },
        // { title: "last task", id: window.crypto.randomUUID(), is_completed: false },
    ]);
    const todos_completed = todos.filter(
        (todo) => todo.is_completed === true
    ).length;
    const total_todos = todos.length;
    return (
        <div className="wrapper">
            <Header />
            <Todohero todos_completed={todos_completed} total_todos={total_todos} />
            <Form setTodos={setTodos} />
            <Todolist todos={todos} />
        </div>
    );
}

export default Home;