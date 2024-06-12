import { type Todo, type TodoForm } from '@/types/Todo';

// 初期データ
export const todos: Todo[] = [
  { id: 1, title: '数学の宿題', isComplete: false },
  { id: 2, title: '文化祭の準備', isComplete: false },
];

// フォーム初期化用データ
export const initTodo: TodoForm = {
  title: '',
  isComplete: false,
};
