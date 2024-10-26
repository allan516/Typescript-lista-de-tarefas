import { TaskProtocol } from "./protocols/taskManager-protocol";

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

