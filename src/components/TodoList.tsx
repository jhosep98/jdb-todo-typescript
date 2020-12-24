type TodoProps = {
  todo: any;
  handleDelete: any;
  handleToggle: any;
};

export const TodoList = ({ todo, handleDelete, handleToggle }: TodoProps) => {
  return (
    <ul className="list-group list-group-flush">
      {todo.map((todo: any, i: number) => (
        <li key={todo.id} className="list-group-item my-3 flex justify-between">
          <p
            className={`${todo.done && "line-through"} cursor-pointer`}
            onClick={() => handleToggle(todo.id)}
          >
            {i + 1}. {todo.desc}
          </p>
          <button onClick={() => handleDelete(todo.id)}>&#10060;</button>
        </li>
      ))}
    </ul>
  );
};
