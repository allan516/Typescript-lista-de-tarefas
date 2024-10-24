import { button, task } from '../dom/domElements';
import { tarefa } from '../taskManager';

button.addEventListener('click', (e) => {
    e.preventDefault();
    tarefa.adicionar()
    task.focus();
    task.value = '';
});

document.body.addEventListener('click', (e) => {
  const target: any = e.target;

  if(target.classList.contains('exclude')) {
    const element = target.parentElement as HTMLSpanElement;
    tarefa.excluir(element);
  }

  if(target.classList.contains('paragraph')) {
      tarefa.tarefaCompleta(target);
  }
})


