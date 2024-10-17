import { exclude, p, result, span, task } from '../utils/utils';
import { tarefa, TaskManager } from '../taskManager';

export class AddTask {
  constructor(
    public span: HTMLSpanElement,
    public p: HTMLParagraphElement,
    public exclude: HTMLButtonElement,
    public result: HTMLDivElement,
    public tarefa: TaskManager,
  ) {}

  add() {
    console.log('cheguei aqui');
    tarefa.taskList.push(task.value);
    span.className = 'span';
    exclude.innerHTML = 'excluir';
    p.innerHTML =
    tarefa.taskList[tarefa.taskList.length - 1];
    if (p.innerHTML === '') return;
    span.appendChild(p);
    span.appendChild(exclude);
    result.appendChild(span);
  }
}

export const addTask = new AddTask(span, p, exclude, result, tarefa);
