import { ITodo } from '../interfaces/todo';

export interface IContextProps {
  state: ITodo[];
  dispatch?: ({ type }: { type: string }) => void;
  addHandler: (title: string) => void;
  toggleHandler: (id: number) => void;
  removeHandler: (id: number) => void;
}
