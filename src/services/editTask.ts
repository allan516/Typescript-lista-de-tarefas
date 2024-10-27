import { TaskProtocol } from "../protocols/taskManager-protocol";

export class EditTask implements TaskProtocol{

  constructor(private target: HTMLElement) {}

  execute() {
    const msg = window.prompt('Alterar a Tarefa: ') as string;
    if(msg === '' || !msg) return this.target.classList.remove('paragrafoVisivel');
    this.target.classList.remove('paragrafoVisivel');
    this.target.innerHTML = msg;
  }
}
