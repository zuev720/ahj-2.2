import Main from '../Main';
import Controller from '../Controller';

it('Класс должен успешно создаваться', () => {
  const main = new Main(document.querySelector('.container'));
  const controller = new Controller(main);
  expect(controller).toEqual({ main: { container: null, films: null } });
});
