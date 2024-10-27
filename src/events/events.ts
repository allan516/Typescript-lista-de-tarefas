import { task } from '../dom/domElements';
import { addTask } from '../services/addTask';
import { DeleteTask } from '../services/excludeTask';
import { MarkAsReadTask } from '../services/markAsReadTask';
import { tarefa } from '../taskManager';

document.body.addEventListener('click', (e) => {
  const target: any = e.target;

  if(target.classList.contains('button')) {
    e.preventDefault();
    tarefa.addCommand('add', addTask);
    tarefa.executeCommand('add');
    task.focus();
    task.value = '';
  }

  if(target.classList.contains('exclude')) {
    const element = target.parentElement as HTMLSpanElement;
    const exclude =  new DeleteTask(element);
    tarefa.addCommand('exclude', exclude);
    tarefa.executeCommand('exclude');
  }

  if(target.classList.contains('paragraph')) {
    const element = target as HTMLElement;
    const markAsRead = new MarkAsReadTask(element);
      tarefa.addCommand('markAsRead', markAsRead);
      tarefa.executeCommand('markAsRead');
  }
});

document.body.addEventListener('dblclick', (e) => {
  e.preventDefault();
  const target: any = e.target;
  const msg = window.prompt('Alterar a Tarefa: ') as string;
  if(target.classList.contains('paragraph')) {
    target.innerHTML = msg
  }
});
