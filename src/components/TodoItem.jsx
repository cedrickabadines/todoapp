import styles from "./todoitem.module.css";
export default function TodoItem({
  item,
  todos,
  setTodos,
  todoField,
  setTodoField,
  index,
  isUpdate,
  setIsUpdate,
}) {
  function handleUpdate(item) {
    console.log(item);
    console.log(todos.indexOf(item));
    const idx = todos.indexOf(item);
    setIsUpdate(idx);
    setTodoField({ name: item.name, done: false });
  }

  function handleDelete(item) {
    console.log("Delete button clicked for " + item);
    setTodos(todos.filter((todo) => todo != item));
    setTodoField({ name: "", done: false });
    setIsUpdate(-1);
  }

  function handleClick(name) {
    const newArray = todos.map(
      (todo) => (todo.name === name ? { ...todo, done: !todo.done } : todo) // Return modified todo or original todo
    );
    setTodos(newArray);
  }

  const className = item.done ? styles.completed : "";

  return (
    <>
      <div key={item.name} className={styles.item}>
        <div className={styles.itemName}>
          <span onClick={() => handleClick(item.name)} className={className}>
            {item.name}
          </span>

          <span>
            <button
              onClick={() => handleDelete(item)}
              className={styles.deleteButton}
            >
              x
            </button>
          </span>
          <span>
            <button
              onClick={() => handleUpdate(item)}
              className={styles.updateButton}
            >
              Update
            </button>
          </span>
        </div>

        <hr className={styles.line} />
      </div>
    </>
  );
}
