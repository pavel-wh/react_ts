import { ITodo } from './interfaces/todo';
import { IAction } from './interfaces/action';

export default function (state: ITodo[], action: IAction) {
  switch (action.type) {
    case 'add':
      return [
        {
          title: action.payload,
          id: Date.now(),
          completed: false,
        },
        ...state,
      ];
    case 'toggle':
      return state.map((todo: ITodo) => {
        if (todo.id === action.payload) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
    case 'remove':
      return state.filter((todo: ITodo) => todo.id !== action.payload);
    default:
      return state;
  }
}
