import { addTask } from './services/addTask';
import { deleteTask } from './services/excludeTask';
import { markAsReadTask } from './services/markAsReadTask';

export class TaskManager {
  taskList: any[] = [];

  adicionar() {
    addTask.add();
  }

  excluir(target: HTMLSpanElement) {
    deleteTask.exclude(target);
  }

  tarefaCompleta(span: HTMLSpanElement) {
    markAsReadTask.markAsRead(span);
  }
}

export const tarefa = new TaskManager();
