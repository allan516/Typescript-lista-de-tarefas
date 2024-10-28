import { domElements, task } from '../dom/domElements';
import { TaskProtocol } from '../protocols/taskManager-protocol';
import {array} from '../events/events'
export class AddTask implements TaskProtocol {

  execute() {
    if(task.value === '') return;
    domElements.create();
    if(array.length > 1) {
      const buttonClear = document.querySelector('.clearAllButton') as HTMLButtonElement;
      buttonClear.style.visibility = 'visible';
    }
  }
}

export const addTask = new AddTask();
