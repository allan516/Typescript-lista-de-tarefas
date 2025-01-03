export const task = document.getElementById('task') as HTMLInputElement;
export const result = document.getElementById('result') as HTMLParagraphElement;
export const buttonClear = document.querySelector('.clearAllButton') as HTMLButtonElement;

export class DomElements {

  create() {
    const span: HTMLSpanElement = document.createElement('span');
    const exclude: HTMLButtonElement = document.createElement('button');
    const p: HTMLParagraphElement = document.createElement('p');
    p.className = 'paragraph'
    span.className = 'span';
    exclude.className = 'exclude';
    exclude.innerHTML = 'excluir';
    p.innerHTML = task.value;
    span.appendChild(p);
    span.appendChild(exclude);
    result.appendChild(span);
 }
}

export const domElements = new DomElements();
