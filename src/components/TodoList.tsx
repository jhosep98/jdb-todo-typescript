type TodoProps = {
  todo: [];
};

export const TodoList = (props: TodoProps) => {
  return (
    <div>
      <ul>{props.todo}</ul>
    </div>
  );
};
