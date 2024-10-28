import { task } from '../dom/domElements';
import { EditTask } from '../services/editTask';
import { addTask } from '../services/addTask';
import { DeleteTask } from '../services/excludeTask';
import { MarkAsReadTask } from '../services/markAsReadTask';
import { tarefa } from '../taskManager';
import { ClearAll } from '../services/clearAll';

export let array: number[] = [];
let index: number = 0;

document.body.addEventListener('click', (e) => {
  const target: any = e.target;

  if(target.classList.contains('button')) {
    e.preventDefault();
    tarefa.addCommand('add', addTask);
    tarefa.executeCommand('add');
    task.focus();
    task.value = '';
    index++;
    array.push(index);
  }

  if(target.classList.contains('exclude')) {
    const element = target.parentElement as HTMLSpanElement;
    const exclude =  new DeleteTask(element);
    array.pop();
    tarefa.addCommand('exclude', exclude);
    tarefa.executeCommand('exclude');
  }

  if(target.classList.contains('paragraph')) {
    const element = target as HTMLElement;
    const markAsRead = new MarkAsReadTask(element);
      tarefa.addCommand('markAsRead', markAsRead);
      tarefa.executeCommand('markAsRead');
  }

  if(target.classList.contains('clearAllButton')) {
    const clearAll = new ClearAll(target);
    tarefa.addCommand('clearAll', clearAll);
    tarefa.executeCommand('clearAll');
    array = [];
  }
});

document.body.addEventListener('dblclick', (e) => {
  e.preventDefault();
  const target: any = e.target;
  if(target.classList.contains('paragraph')) {
    const element = target as HTMLElement;
    const edit = new EditTask(element);
    tarefa.addCommand('edit', edit);
    tarefa.executeCommand('edit');
    task.focus();
    task.value = '';
  }
});
