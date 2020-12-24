import { useForm } from "../hooks/useForm";

type PropsAdd = {
  handleAddTodo: any;
};

export const TodoAdd = ({ handleAddTodo }: PropsAdd) => {
  const [{ description }, handleInputChange, reset] = useForm({
    description: "",
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (description.trim().length <= 1) {
      return;
    }

    const newToDo = {
      id: new Date().getTime(),
      desc: description,
      done: false,
    };

    handleAddTodo(newToDo);
    reset();
  };
  return (
    <form className="mb-6 my-3" onSubmit={handleSubmit}>
      <div className="flex flex-col mb-4">
        <label
          className="mb-2 text-lg font-bold text-grey-darkest"
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
        className="mt-5 w-full text-white uppercase p-3 rounded font-bold transition duration-200 ease-in-out bg-gray-600 hover:bg-gray-900 transform hover:-translate-y-1 hover:scale-60"
      >
        Add
      </button>
    </form>
  );
};
