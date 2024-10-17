import { task } from './utils/utils';
import { addTask } from './services/addTask';

export class TaskManager {
  name: string = task.value;
  taskList: string[] = [];

  adicionar() {
    addTask.add();
  }
}

export const tarefa = new TaskManager();
