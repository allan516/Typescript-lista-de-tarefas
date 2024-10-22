export class DeleteTask {
  exclude(target: HTMLSpanElement) {
      window.confirm('Deseja excluir esta tarefa?') === true
    ? target.remove()
    : target;
  }
}

export const deleteTask = new DeleteTask();
