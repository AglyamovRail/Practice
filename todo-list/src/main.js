import HeaderComponent from './view/header-component.js';
import FormAddTaskComponent from './view/form-add-task-component.js';
import TaskComponent from './view/task-component.js';
import TaskAreaComponent from './view/task-area-component.js';
import TaskListComponent from './view/task-list-component.js';
import {render, RenderPosition} from './framework/render.js';


const bodyContainer = document.querySelector('.board-app');
const formContainer = document.querySelector('.enter');
const taskAreaContainer = document.querySelector(".list");


render(new HeaderComponent(), bodyContainer, RenderPosition.BEFOREBEGIN);
render(new FormAddTaskComponent(), formContainer);
render(new TaskAreaComponent(), taskAreaContainer, RenderPosition.BEFOREBEGIN);

const tasksAreaContainer = document.querySelector(".list");

for (let i = 0; i < 4; i++) {
    const taskListComponent = new TaskListComponent();
    render(taskListComponent, tasksAreaContainer, RenderPosition.BEFOREEND);

    const tasksList = taskListComponent.getElement(".task_list");

    for (let j = 0; j < 4; j++) {
        render(new TaskComponent(), tasksList, RenderPosition.BEFOREEND);
      }
  }

