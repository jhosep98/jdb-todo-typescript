import { useEffect, useReducer } from "react";
import { todoReducer, initialState } from "../helpers/todoReducer";
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";

const init = () => {
  const getItemLocalStorage: any = localStorage.getItem("to-do");
  return JSON.parse(getItemLocalStorage) || [];
};

export const TodoApp = () => {
  const [todo, dispatch] = useReducer(todoReducer, initialState, init);

  useEffect(() => {
    localStorage.setItem("to-do", JSON.stringify(todo));
  }, [todo]);

  const handleDelete = (todoId: any) => {
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

  const handleAddTodo = (newTodo: any) => {
    dispatch({
      type: "add",
      payload: newTodo,
    });
  };

  return (
    <main className="container mx-auto px-5 mt-3 max-w-7xl sm:px-6 lg:px-8">
      <h2 className="text-xl mt-5 text-black font-bold uppercase">
        Add your new to-do &#128204; ({todo.length})
      </h2>
      <hr />
      <TodoAdd handleAddTodo={handleAddTodo} />
      <div className="col-7">
        <h2 className="mb-2 font-bold text-lg text-grey-darkest uppercase">
          To-do list:
        </h2>
        <TodoList
          todo={todo}
          handleDelete={handleDelete}
          handleToggle={handleToggle}
        />
      </div>
    </main>
  );
};
