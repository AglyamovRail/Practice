import {createElement} from '../framework/render.js';


function createTaskComponentTemplate(name) {
  return (
        `<li class="task">${name}</li>`
           );
}


export default class TaskComponent {
  
  constructor({name}) {
    this.name = name;
  }

  getTemplate() {
    return createTaskComponentTemplate(this.name);
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
