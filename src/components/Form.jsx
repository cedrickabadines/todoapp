import { useState } from "react";
import styles from "./form.module.css";

export default function Form({
  todos,
  setTodos,
  todoField,
  setTodoField,
  isUpdate,
  setIsUpdate,
}) {
  // const [todo, setTodo] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (isUpdate < 0) {
      setTodos([...todos, todoField]);
      setTodoField({ name: "", done: false });
    } else {
      const updatedTodos = todos.map((todo, index) =>
        index === isUpdate ? todoField : todo
      );
      setTodos(updatedTodos);
      setTodoField({ name: "", done: false });
      setIsUpdate(-1);
    }
  }
  // console.log(todos);
  return (
    <>
      <form className={styles.todoform} onSubmit={handleSubmit}>
        <div className={styles.inputContainer}>
          <input
            className={styles.modernInput}
            type="text"
            value={todoField.name}
            onChange={(e) =>
              setTodoField({ name: e.target.value, done: false })
            }
            placeholder="Enter todo item..."
          />
          <button className={styles.modernButton} type="submit">
            Save
          </button>
        </div>
      </form>
    </>
  );
}
