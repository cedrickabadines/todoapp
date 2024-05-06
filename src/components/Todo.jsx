import { useState } from "react";
import TodoItem from "./TodoItem";
import Form from "./Form";
import TodoList from "./TodoList";
import Footer from "./Footer";

export default function Todo() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState({ name: "", done: false });
  const [isUpdate, setIsUpdate] = useState(-1);
  const completedTodos = todos.filter((todo) => todo.done === true).length;
  const totalTodos = todos.length;
  return (
    <>
      <Form
        todos={todos}
        setTodos={setTodos}
        todoField={todo}
        setTodoField={setTodo}
        isUpdate={isUpdate}
        setIsUpdate={setIsUpdate}
      />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        todoField={todo}
        setTodoField={setTodo}
        isUpdate={isUpdate}
        setIsUpdate={setIsUpdate}
      />
      <Footer completedTodos={completedTodos} totalTodos={totalTodos} />
    </>
  );
}
