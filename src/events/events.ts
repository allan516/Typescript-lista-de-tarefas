import { button, task } from '../dom/domElements';
import { TaskProtocol } from '../protocols/taskManager-protocol';
import { addTask, AddTask } from '../services/addTask';
import { DeleteTask } from '../services/excludeTask';
import { MarkAsReadTask } from '../services/markAsReadTask';
import { tarefa } from '../taskManager';

button.addEventListener('click', (e) => {
    e.preventDefault();
    tarefa.addCommand('add', addTask);
    tarefa.executeCommand('add');
    task.focus();
    task.value = '';
});

// document.body.addEventListener('click', (e) => {
//   const target: any = e.target;

//   if(target.classList.contains('exclude')) {
//     const element = target.parentElement as HTMLSpanElement;
//     tarefa.excluir(element);
//   }

//   if(target.classList.contains('paragraph')) {
//       tarefa.tarefaCompleta(target);
//   }
// })



