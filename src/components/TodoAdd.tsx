export const TodoAdd = () => {
  return (
    <form className="mb-6 my-3">
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
          name="first_name"
          id="todo"
          placeholder="add new to-do"
        />
      </div>
      <button
        type="submit"
        className="block w-full bg-gray-600 hover:bg-teal-dark text-white uppercase text-sm mx-auto p-4 rounded"
      >
        Add
      </button>
    </form>
  );
};
