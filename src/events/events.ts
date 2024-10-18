import { button, task } from '../utils/utils';
import { tarefa } from '../taskManager';


button.addEventListener('click', (e) => {
    e.preventDefault();
    tarefa.adicionar()
    task.focus();
    task.value = '';
});
