import './style.css';
import * as math from './math';

const multiply = (a) => a * 8;

function render() {
  const outputElement = document.createElement('div');
  outputElement.textContent = 'ES6 modules!';
  document.body.appendChild(outputElement);

  const sumResultElement = document.createElement('div');
  sumResultElement.textContent = 'sum = ' + math.sum(2, 3);
  document.body.appendChild(sumResultElement);

  const multiplyFromIndexElement = document.createElement('div');
  multiplyFromIndexElement.textContent = 'multiply from index.js = ' + multiply(5);
  document.body.appendChild(multiplyFromIndexElement);

  const multiplyFromMathElement = document.createElement('div');
  multiplyFromMathElement.textContent = 'multiply from math = ' + math.multiply(5);
  document.body.appendChild(multiplyFromMathElement);
}

render();

if (module.hot) {
  module.hot.accept('./style.css', () => {
    console.log('Стили обновлены!');
  });

  module.hot.accept('./math', () => {
    console.log('Модуль math обновлен!');
    document.body.innerHTML = '';
    render();
  });
}
