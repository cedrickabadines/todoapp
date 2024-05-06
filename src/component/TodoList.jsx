import UpdateOrDeleteBtn from "./UpdateOrDeleteBtn";
export default function TodoList({ todo, complete, updateTodo, deleteTodo }) {
  return (
    <>
      <ol>
        {todo.map((e, index) => (
          <li key={index}>
            {e}{" "}
            <UpdateOrDeleteBtn
              e={e}
              index={index}
              complete={complete()}
              updateTodo={updateTodo()}
              deleteTodo={deleteTodo()}
            />
          </li>
        ))}
      </ol>
    </>
  );
}
