export default class Main {
  constructor(container) {
    this.container = container;
    this.films = null;
  }

  drawTable(films) {
    this.container.innerHTML = '';
    this.films = films;
    const table = document.createElement('table');
    const titles = document.createElement('tr');
    titles.innerHTML = '<th>id</th><th>title</th><th>year</th><th>imdb</th>';
    table.appendChild(titles);

    this.films.forEach((film) => {
      const {
        id,
        title,
        imdb,
        year,
      } = film;

      table.innerHTML += `
        <tr>
        <td data-id=${id}>${id}</td>
        <td data-title=${title}>${title}</td>
        <td data-year=${year}>${year}</td>
        <td data-imdb=${imdb}>${imdb}</td>
        </tr>
`;
    });
    this.container.appendChild(table);
  }

  sortByUp(attribute) {
    // eslint-disable-next-line no-restricted-globals
    const sort = [...this.container.querySelectorAll(`[data-${attribute}]`)].map((elem) => ((!isNaN(Number(elem.getAttribute(`data-${attribute}`))))
      ? Number(elem.getAttribute(`data-${attribute}`))
      : elem.innerHTML))
      .sort(Main.compare);
    return sort.reduce((set, elem) => {
      this.films.forEach((film, index) => {
        if (elem === film[attribute]) set.add(this.films[index]);
      });
      return set;
    }, new Set());
  }

  sortByDown(attribute) {
    // eslint-disable-next-line no-restricted-globals
    const sort = [...this.container.querySelectorAll(`[data-${attribute}]`)].map((elem) => ((!isNaN(Number(elem.getAttribute(`data-${attribute}`))))
      ? Number(elem.getAttribute(`data-${attribute}`))
      : elem.innerHTML))
      .sort(Main.compare).reverse();
    return sort.reduce((set, elem) => {
      this.films.forEach((film, index) => {
        if (elem === film[attribute]) set.add(this.films[index]);
      });
      return set;
    }, new Set());
  }

  static compare(a, b) {
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    return 0;
  }
}
