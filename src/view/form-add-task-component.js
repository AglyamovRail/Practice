import {createElement} from '../framework/render.js';


function createFormAddTaskComponentTemplate() {
    return (
        `<section class="enter">
        <h2>Новая задача</h2>
        <div>
            <form> 
                <input type="text" name="text" class="input-text" placeholder="Название задачи... " required>
                <input type="submit" name="submit" class="input-submit" value="＋ Добавить">
            </form>
        </div>
        </section>`
            );
}


export default class FormAddTaskComponent {
  getTemplate() {
    return createFormAddTaskComponentTemplate();
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
