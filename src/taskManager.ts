// import { addTask } from './services/addTask';
// import { deleteTask } from './services/excludeTask';
// import { markAsReadTask } from './services/markAsReadTask';

import { TaskProtocol } from "./protocols/taskManager-protocol";

// export class TaskManager implements Task {
//   adicionar() {
//     addTask.add();
//   }

//   excluir(target: HTMLSpanElement) {
//     deleteTask.exclude(target);
//   }

//   tarefaCompleta(span: HTMLSpanElement) {
//     markAsReadTask.markAsRead(span);
//   }
// }

export class TaskManager {
  private _tasklist: { [k: string]: TaskProtocol } = {};

  addCommand(command: string, element: TaskProtocol) {
    this._tasklist[command] = element;
  }

  executeCommand(command: string): void {
    this._tasklist[command].execute();
  }
}

export const tarefa = new TaskManager();

