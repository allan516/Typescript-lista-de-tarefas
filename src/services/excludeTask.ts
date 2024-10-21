import { tarefa } from "../taskManager";

export class DeleteTask {
  exclude(target: HTMLSpanElement) {
    tarefa.taskList
      window.confirm('Deseja excluir esta tarefa?') === true
    ? target.remove()
    : target;
  }
}

export const deleteTask = new DeleteTask();
