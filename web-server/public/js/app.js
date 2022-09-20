console.log('Client side JavaScript file is loaded.');

const BASE_URL = 'http://127.0.0.1:3000';

const weatherForm = document.querySelector('form');
const search = document.querySelector('input');

const messageOne = document.querySelector('#message-1');
const messageTwo = document.querySelector('#message-2');

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const location = search.value.trim();

    messageOne.textContent = 'Loading...';
    messageTwo.textContent = '';

    fetch(`${BASE_URL}/weather?address=${location}`).then((response => {
        response.json().then((data) => {
            if (data.error) {
                messageOne.textContent = data.error;
            } else {
                messageOne.textContent = data.location;
                messageTwo.textContent = data.forecast;
            }
        })
    }))
});