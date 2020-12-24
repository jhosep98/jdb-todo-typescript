import { useEffect, useReducer } from "react";
import { todoReducer, initialState } from "../helpers/todoReducer";
import { useForm } from "../hooks/useForm";

const init = () => {
  const getItemLocalStorage: any = localStorage.getItem("to-do");
  return JSON.parse(getItemLocalStorage) || [];
};

export const TodoApp = () => {
  const [todo, dispatch] = useReducer(todoReducer, initialState, init);

  const [{ description }, handleInputChange, reset] = useForm({
    description: "",
  });

  useEffect(() => {
    localStorage.setItem("to-do", JSON.stringify(todo));
  }, [todo]);

  const handleDelete = (todoId: any) => {
    console.log(todoId);

    dispatch({
      type: "delete",
      payload: todoId,
    });
  };

  const handleToggle = (todoId: any) => {
    dispatch({
      type: "toggle",
      payload: todoId,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (description.trim().length <= 1) {
      return;
    }

    type NewToDo = {
      id: number;
      desc: string;
      done: boolean;
    };
    const newToDo: NewToDo = {
      id: new Date().getTime(),
      desc: description,
      done: false,
    };

    dispatch({ type: "add", payload: newToDo });
    reset();
  };
  return (
    <main className="container mx-auto px-4 my-4">
      <h2 className="mb-2 font-bold text-lg text-grey-darkest">
        Add your new to-do &#9989; ({todo.length})
      </h2>
      <hr />
      {console.log(todo)}
      <form className="mb-6 my-3" onSubmit={handleSubmit}>
        <div className="flex flex-col mb-4">
          <label
            className="mb-2 font-bold text-sm text-grey-darkest"
            htmlFor="todo"
          >
            Description:
          </label>
          <input
            className="border py-2 px-3 text-grey-darkest"
            type="text"
            name="description"
            id="todo"
            placeholder="add new to-do"
            onChange={handleInputChange}
            value={description}
            autoComplete="off"
          />
        </div>
        <button
          type="submit"
          className="block w-full bg-gray-600 hover:bg-gray-900 text-white uppercase text-sm mx-auto p-4 rounded"
        >
          Add
        </button>
      </form>

      <div className="col-7">
        <h2 className="mb-2 font-bold text-lg text-grey-darkest uppercase">
          To-do list:
        </h2>
        <ul className="list-group list-group-flush">
          {todo.map((todo, i) => (
            <li
              key={todo.id}
              className="list-group-item my-3 flex justify-between"
            >
              <p
                className={`${todo.done && "line-through"}`}
                onClick={() => handleToggle(todo.id)}
              >
                {i + 1}. {todo.desc}
              </p>
              <button
                className="block bg-red-600 p-2 rounded text-white uppercase text-sm mx-auto"
                onClick={() => handleDelete(todo.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};
