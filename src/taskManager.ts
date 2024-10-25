// import { addTask } from './services/addTask';
// import { deleteTask } from './services/excludeTask';
// import { markAsReadTask } from './services/markAsReadTask';

import { Task } from "./protocols/task";

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

export class TaskManager implements Task {
  private _tasklist: HTMLElement[] = [];

  set tasklist(task: HTMLElement) {
    this._tasklist.push(task);
  }

  get tasklist(): HTMLElement[] {
    return this._tasklist;
  }

  makeYourChoice(arg: number) {
    this._tasklist[arg];
  }
}

export const tarefa = new TaskManager();

