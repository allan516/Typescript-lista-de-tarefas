import { buttonClear } from "../dom/domElements";
import { array } from "../events/events";
import { TaskProtocol } from "../protocols/taskManager-protocol";

export class DeleteTask implements TaskProtocol{
  constructor(private target: HTMLElement) {}
  execute() {
    const msg = window.confirm('Deseja excluir esta tarefa?');
    if(msg === true) {
      if(array.length < 5) buttonClear.style.visibility = 'hidden';
      this.target.remove()
    }
  }
}
