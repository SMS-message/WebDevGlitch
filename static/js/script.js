'use strict';

function func () {
    let v = confirm('Lorem Ipsum debitis est assumenda?')
    if(v) {
        alert('Velit est tempora commodi sapiente optio aspernatur minima!')
    }
}

const button = document.querySelector('#myButton')

button.addEventListener('click', func)


