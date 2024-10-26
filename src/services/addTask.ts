import { domElements, task } from '../dom/domElements';
import { TaskProtocol } from '../protocols/taskManager-protocol';

export class AddTask implements TaskProtocol {

  execute() {
    if(task.value === '') return;
    domElements.create();
  }
}

export const addTask = new AddTask();
