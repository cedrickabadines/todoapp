import TodoItem from "./TodoItem";
import styles from "./todolist.module.css";
export default function TodoList({
  todos,
  setTodos,
  todoField,
  setTodoField,
  isUpdate,
  setIsUpdate,
}) {
  const sortedTodos = todos
    .slice()
    .sort((a, b) => Number(a.done) - Number(b.done));

  return (
    <div className={styles.list}>
      {sortedTodos.map((item, idx) => (
        <TodoItem
          key={item.name}
          item={item}
          todos={todos}
          setTodos={setTodos}
          todoField={todoField}
          setTodoField={setTodoField}
          index={idx}
          isUpdate={isUpdate}
          setIsUpdate={setIsUpdate}
        />
      ))}
    </div>
  );
}
