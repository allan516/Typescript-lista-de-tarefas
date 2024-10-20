export class MarkAsReadTask {

  markAsRead(arg: HTMLSpanElement, arg2: HTMLParagraphElement) {
    if (!arg.classList.contains('paragrafoVisivel')) {
      arg2.classList.add('paragrafoVisivel');
      arg.classList.add('paragrafoVisivel');
    } else {
      arg2.style.textDecoration = 'none';
      arg.classList.remove('paragrafoVisivel');
      arg2.classList.remove('paragrafoVisivel');
    }
  }
}


export const markAsReadTask = new MarkAsReadTask();
