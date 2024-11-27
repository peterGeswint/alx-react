import $ from 'jquery';
import _ from 'lodash';
import './body.css';

let count = 0;

function updateCounter() {
  count++;
  $('#counter').text(`Counter: ${count}`);
}

$('body').append('<button id="counter-btn">Click me</button>');
$('body').append('<div id="counter">Counter: 0</div>');

$('#counter-btn').on('click', _.throttle(updateCounter, 1000));
