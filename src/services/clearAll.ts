import { TaskProtocol } from "../protocols/taskManager-protocol";

export class ClearAll implements TaskProtocol{
  constructor(private target: HTMLButtonElement) {}
  execute() {
    alert('Apagando todas as tarefas. . .');
    this.target.style.visibility = 'hidden';
    const span = document.querySelectorAll('span');
    console.log(span);
    span.forEach(valor => {
      valor.remove();
    });
  }
}
