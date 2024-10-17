export class markAsReadTask {
  constructor(
    public arg: HTMLSpanElement,
    public arg2: HTMLParagraphElement,
  ) {}
  markAsRead(arg: HTMLSpanElement, arg2: HTMLParagraphElement) {
    if (!arg.classList.contains('paragrafoVisivel')) {
      arg2.style.textDecoration = 'line-through';
      arg.classList.add('paragrafoVisivel');
    } else {
      arg2.style.textDecoration = 'none';
      arg.classList.remove('paragrafoVisivel');
    }
  }
}
