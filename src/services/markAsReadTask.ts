import { TaskProtocol } from "../protocols/taskManager-protocol";

export class MarkAsReadTask implements TaskProtocol{

  constructor(private arg: HTMLElement) {}

  execute() {
    if (!this.arg.classList.contains('paragrafoVisivel')) {
      this.arg.classList.add('paragrafoVisivel');
    } else {
      this.arg.classList.remove('paragrafoVisivel');
    }
  }
}

