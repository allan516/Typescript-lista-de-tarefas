import { result, task } from '../utils/utils';
import { tarefa } from '../taskManager';

export class AddTask {
  id: number = 0;

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
    this.id++;
    tarefa.taskList.push({id: this.id, task: task.value});
    console.log(tarefa.taskList[this.id]);
  }
}

export const addTask = new AddTask();
