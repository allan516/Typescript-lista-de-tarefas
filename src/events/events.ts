import { button, task } from '../utils/utils';
import { tarefa } from '../taskManager';

button.addEventListener('click', (e) => {
    e.preventDefault();
    tarefa.adicionar()
    task.focus();
    task.value = '';
});

document.body.addEventListener('click', (e) => {
  const target = e.target as HTMLElement;
  const spann = document.querySelector('.span') as HTMLSpanElement;

  if(target.classList.contains('exclude') && spann) tarefa.excluir(spann);

  if(target.classList.contains('paragraph')) {
      tarefa.tarefaCompleta(target);
  }
})


