export class DeleteTask {
  exclude(spann: HTMLSpanElement) {
          window.confirm('Deseja excluir esta tarefa?') === true
        ? spann.remove()
        : spann;
  }
}

export const deleteTask = new DeleteTask();
