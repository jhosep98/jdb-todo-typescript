import { TodoAdd } from "./TodoAdd";

export const TodoApp = () => {
  return (
    <main className="container mx-auto px-4 my-4">
      <h2 className=" mb-2 font-bold text-lg text-grey-darkest">
        Add your new to-do &#9989;
      </h2>
      <hr />
      <TodoAdd />
    </main>
  );
};
