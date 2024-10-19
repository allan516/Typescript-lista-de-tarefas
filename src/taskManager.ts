import { addTask } from './services/addTask';
import { deleteTask } from './services/excludeTask';

export class TaskManager {
  taskList: string[] = [];

  adicionar() {
    addTask.add();
  }

  excluir() {
    deleteTask.exclude();
  }
}

export const tarefa = new TaskManager();
