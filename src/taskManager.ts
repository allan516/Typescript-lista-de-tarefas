import { addTask } from './services/addTask';
import { deleteTask } from './services/excludeTask';
import { markAsReadTask } from './services/markAsReadTask';

export class TaskManager {
  taskList: string[] = [];

  adicionar() {
    addTask.add();
  }

  excluir(spann: HTMLSpanElement) {
    deleteTask.exclude(spann);
  }

  tarefaCompleta(span: HTMLSpanElement, p: HTMLParagraphElement) {
    markAsReadTask.markAsRead(span, p);
  }
}

export const tarefa = new TaskManager();
