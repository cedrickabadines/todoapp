import { useState } from "react";
import TodoList from "./TodoList";
import CompletedList from "./CompletedList";

export default function InputField() {
  const [todo, setTodo] = useState([]);
  const [item, setItem] = useState();
  const [completedArray, setCompletedArray] = useState([]);
  const [completed, Completed] = useState();
  const [isUpdate, setIsUpdate] = useState();

  function save() {
    if (isUpdate) {
      todo[isUpdate] = item;
      setItem("");
      setIsUpdate();
    } else {
      setTodo([...todo, item]);
      setItem("");
    }
  }

  function complete(index, e) {
    console.log(e);
    console.log(index);
    setCompletedArray([...completedArray, e]);

    todo.splice(index, 1);
  }
  function clearCompletedList() {
    setCompletedArray([]);
  }
  function updateTodo(index, e) {
    setItem(todo[index]);
    setIsUpdate(index);
  }
  function deleteTodo(index) {
    todo.splice(index, 1);
  }

  const clearBtn = (
    <button onClick={() => clearCompletedList()}>Clear Complete List</button>
  );

  return (
    <>
      <input
        onChange={(e) => setItem(e.target.value)}
        type="text"
        value={item}
      />
      <button onClick={save}>Save</button>
      <TodoList
        todo={todo}
        complete={() => complete}
        updateTodo={() => updateTodo}
        deleteTodo={() => deleteTodo}
      />
      {completedArray.length > 0 && clearBtn}
      <CompletedList completedArray={completedArray} />
    </>
  );
}
