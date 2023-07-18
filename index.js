// Write your code here!
const mainElement = document.querySelector('main#main');
mainElement.remove();

const newHeader = document.createElement('h1');
newHeader.id = 'victory'

const myName = 'Nathan'
newHeader.textContent = `${myName} is the champion`;