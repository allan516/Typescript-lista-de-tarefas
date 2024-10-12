const task = document.getElementById('task') as HTMLInputElement;
const button = document.getElementById('idButton') as HTMLButtonElement;
const result = document.getElementById('result') as HTMLParagraphElement;

button.addEventListener('click', (e) => {
  e.preventDefault();
  tarefa.add(task.value);
  tarefa.show();
  task.focus();
  task.value = '';
});

class TaskManager {
  taskList: string[] = [];

  add(args: string) {
    this.taskList.push(args);
  }

  show() {
    const span: HTMLSpanElement = document.createElement('span');
    const exclude: HTMLButtonElement = document.createElement('button');
    const p: HTMLParagraphElement = document.createElement('p');
    span.className = 'span';
    exclude.innerHTML = 'excluir';
    p.innerHTML = this.taskList[this.taskList.length - 1];
    if (p.innerHTML === '') return;
    span.appendChild(p);
    span.appendChild(exclude);
    result.appendChild(span);
    p.addEventListener('click', function () {
      tarefa.markAsRead(span, p);
    });
    exclude.addEventListener('click', function () {
      window.confirm('Deseja excluir esta tarefa?') === true
        ? span.remove()
        : span;
    });
  }

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

const tarefa = new TaskManager();
