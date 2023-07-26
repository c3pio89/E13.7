import './style.css';
import * as math from './math';
import axios from 'axios';

const multiply = (a) => a * 8;

function updateContent(data) {
  const outputElement = document.querySelector('#output');
  const sumResultElement = document.querySelector('#sumResult');
  const multiplyFromIndexElement = document.querySelector('#multiplyFromIndex');
  const multiplyFromMathElement = document.querySelector('#multiplyFromMath');
  const userDataElement1 = document.querySelector('#userData1');
  const userDataElement2 = document.querySelector('#userData2');

  outputElement.textContent = 'ES6 modules!';
  sumResultElement.textContent = 'sum = ' + math.sum(2, 3);
  multiplyFromIndexElement.textContent = 'multiply from index.js = ' + multiply(5);
  multiplyFromMathElement.textContent = 'multiply from math = ' + math.multiply(5);

  if (data && data.users && Array.isArray(data.users) && data.users.length > 0) {
    const user1 = data.users[0];
    userDataElement1.textContent = `Name: ${user1.name}, Age: ${user1.age}, City: ${user1.city}`;

    const user2 = data.users[1];
    userDataElement2.textContent = `Name: ${user2.name}, Age: ${user2.age}, City: ${user2.city}`;
  } else {
    userDataElement1.textContent = 'Data not available.';
    userDataElement2.textContent = 'Data not available.';
  }
}

function render() {
  const outputElement = document.createElement('div');
  outputElement.id = 'output';
  document.body.appendChild(outputElement);

  const sumResultElement = document.createElement('div');
  sumResultElement.id = 'sumResult';
  document.body.appendChild(sumResultElement);

  const multiplyFromIndexElement = document.createElement('div');
  multiplyFromIndexElement.id = 'multiplyFromIndex';
  document.body.appendChild(multiplyFromIndexElement);

  const multiplyFromMathElement = document.createElement('div');
  multiplyFromMathElement.id = 'multiplyFromMath';
  document.body.appendChild(multiplyFromMathElement);

  const userDataElement1 = document.createElement('div');
  userDataElement1.id = 'userData1';
  document.body.appendChild(userDataElement1);

  const userDataElement2 = document.createElement('div');
  userDataElement2.id = 'userData2';
  document.body.appendChild(userDataElement2);

  axios.get('http://localhost:3002/users')
    .then(response => updateContent(response.data))
    .catch(error => {
      console.error('Error fetching data:', error);
      updateContent(null);
    });
}

render();

if (module.hot) {
  module.hot.accept('./style.css', () => {
    console.log('Стили обновлены!');
  });

  module.hot.accept('./math', () => {
    console.log('Модуль math обновлен!');
    axios.get('http://localhost:3002/users')
      .then(response => updateContent(response.data))
      .catch(error => {
        console.error('Error fetching data:', error);
        updateContent(null);
      });
  });
}
