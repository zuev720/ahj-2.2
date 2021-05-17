import Main from './Main';
import Controller from './Controller';

const main = new Main(document.querySelector('.container'));
const controller = new Controller(main);
controller.init().then((draw) => draw);
