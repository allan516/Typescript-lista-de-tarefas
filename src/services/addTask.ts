import { domElements, task } from '../dom/domElements';

export class AddTask {

  add() {
    if(task.value === '') return;
    domElements.create();
  }
}

export const addTask = new AddTask();
