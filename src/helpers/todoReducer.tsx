export const initialState = [
  {
    id: new Date().getTime(),
    desc: "Learn Reactjs",
    done: false,
  },
];

type ACTIONTYPE =
  | {
      type: "add";
      payload: { id: number; desc: string; done: boolean };
    }
  | { type: "delete"; payload: { id: number; desc: string; done: boolean } }
  | { type: "toggle"; payload: { id: number; desc: string; done: boolean } };

export const todoReducer = (state: typeof initialState, action: ACTIONTYPE) => {
  switch (action.type) {
    case "add":
      return [...state, action.payload];
    case "delete":
      return state.filter((todo: any) => todo.id !== action.payload);
    case "toggle":
      return state.map((todo: any) =>
        todo.id === action.payload ? { ...todo, done: !todo.done } : todo
      );
    default:
      return state;
  }
};
