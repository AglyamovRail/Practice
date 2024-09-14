import {createElement} from '../framework/render.js';


function createTaskListComponentTemplate() {
    return (
        `<ul class="backlog-list">
            <h3 class="backlog">Бэклог</h3>
            <ul class="task-list">
            </ul>
        </ul>`
           );
}


export default class TaskListComponent {
  getTemplate() {
    return createTaskListComponentTemplate();
  }


  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }


    return this.element;
  }


  removeElement() {
    this.element = null;
  }
}
