import { TaskProtocol } from "../protocols/taskManager-protocol";

export class DeleteTask implements TaskProtocol{
  constructor(private target: HTMLElement) {}
  execute() {
      window.confirm('Deseja excluir esta tarefa?') === true
    ? this.target.remove()
    : this.target;
  }
}
