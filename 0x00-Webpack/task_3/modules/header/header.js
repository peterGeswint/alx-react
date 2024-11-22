import $ from 'jquery';
import '../header/header.css';
import logo from '../../assets/holberton-logo.jpg';

console.log('Init header');

$('body').append(`<div id="logo" style="background-image: url(${logo});"></div>`);
$('body').append('<h1>Holberton Dashboard</h1>');
