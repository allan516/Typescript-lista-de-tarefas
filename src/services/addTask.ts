import { result, task } from '../utils/utils';

export class AddTask {

  add() {
    const span: HTMLSpanElement = document.createElement('span');
    const exclude: HTMLButtonElement = document.createElement('button');
    const p: HTMLParagraphElement = document.createElement('p');
    if(task.value === '') return;
    p.className = 'paragraph'
    span.className = 'span';
    exclude.className = 'exclude';
    exclude.innerHTML = 'excluir';
    p.innerHTML = task.value;
    span.appendChild(p);
    span.appendChild(exclude);
    result.appendChild(span);
  }
}

export const addTask = new AddTask();
