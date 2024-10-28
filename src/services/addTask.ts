import { buttonClear, domElements, task } from '../dom/domElements';
import { TaskProtocol } from '../protocols/taskManager-protocol';
import {array} from '../events/events'
export class AddTask implements TaskProtocol {

  execute() {
    if(task.value === '') return;
    domElements.create();
    if(array.length > 3) buttonClear.style.visibility = 'visible';
  }
}

export const addTask = new AddTask();
