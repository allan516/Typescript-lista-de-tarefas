import { result, task } from '../utils/utils';
import { tarefa, TaskManager } from '../taskManager';

export class AddTask {
  constructor(
    public result: HTMLDivElement,
    public tarefa: TaskManager,
  ) {}

  add() {
    const span: HTMLSpanElement = document.createElement('span');
    const exclude: HTMLButtonElement = document.createElement('button');
    const p: HTMLParagraphElement = document.createElement('p');
    if(task.value === '') return;
    tarefa.taskList.push(task.value);
    p.className = 'paragraph'
    span.className = 'span';
    exclude.className = 'exclude';
    exclude.innerHTML = 'excluir';
    p.innerHTML =
    tarefa.taskList[tarefa.taskList.length - 1];
    span.appendChild(p);
    span.appendChild(exclude);
    result.appendChild(span);
    console.log(tarefa.taskList);
  }
}

export const addTask = new AddTask(result, tarefa);
