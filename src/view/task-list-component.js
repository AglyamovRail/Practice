import {createElement} from '../framework/render.js';


function createTaskListComponentTemplate(listname, status) {
    return (
        `<ul class="${status}-list">
            <h3 class="${status}">${listname}</h3>
            <ul class="task-list">
            </ul>
        </ul>`
           );
}


export default class TaskListComponent {
  constructor(listname, status) {
    this.listname = listname;
    this.status = status;
  }
  getTemplate()  {
    return createTaskListComponentTemplate(this.listname, this.status);
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
