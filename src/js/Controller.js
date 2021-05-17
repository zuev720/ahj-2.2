import films from '../base/films';

export default class Controller {
  constructor(main) {
    this.main = main;
  }

  async init() {
    this.main.drawTable(films);
    await this.sortById('id');
    await this.sortById('title');
    await this.sortById('year');
    await this.sortById('imdb');
    await this.init();
  }

  sortById(attribute) {
    return new Promise((resolve) => {
      setTimeout(() => {
        this.main.drawTable([...this.main.sortByUp(attribute).values()]);
        const activeCell = [...this.main.container.querySelectorAll('th')].find((cell) => cell.innerHTML === attribute);
        activeCell.classList.add('sortUp');
        resolve();
      }, 5000);
    }).then(() => new Promise((resolve) => {
      setTimeout(() => {
        this.main.drawTable([...this.main.sortByDown(attribute).values()]);
        const activeCell = [...this.main.container.querySelectorAll('th')].find((cell) => cell.innerHTML === attribute);
        activeCell.classList.add('sortDown');
        resolve();
      }, 5000);
    }));
  }
}
