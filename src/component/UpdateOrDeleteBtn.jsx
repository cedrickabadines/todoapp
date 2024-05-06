export default function UpdateOrDeleteBtn({
  e,
  index,
  complete,
  updateTodo,
  deleteTodo,
}) {
  return (
    <>
      <button onClick={() => complete(index, e)}>Done</button>
      <button onClick={() => updateTodo(index)}>Update</button>
      <button onClick={() => deleteTodo(index)}>Delete</button>
    </>
  );
}
