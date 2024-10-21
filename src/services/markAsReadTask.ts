export class MarkAsReadTask {

  markAsRead(arg: HTMLSpanElement) {
    if (!arg.classList.contains('paragrafoVisivel')) {
      arg.classList.add('paragrafoVisivel');
    } else {
      arg.classList.remove('paragrafoVisivel');
    }
  }
}


export const markAsReadTask = new MarkAsReadTask();
