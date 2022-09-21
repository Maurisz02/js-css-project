import 'bootstrap/dist/js/bootstrap.bundle.js';
import 'bootstrap/dist/css/bootstrap.css';

import './main.css';


let colors = [
    'red',
    'orange',
    'yellow',
    'green',
    'cyan',
    'blue',
    'purple',
];

let aktualisSzin = 0;

function colorChange(){
    aktualisSzin++;
    if(aktualisSzin >= colors.length){
        aktualisSzin = 0;
    }
    document.body.style.backgroundColor = colors[aktualisSzin]; 
}

function init(){
    document.getElementById('szinvalto').addEventListener('click',colorChange);
}

document.addEventListener('DOMContentLoaded',init);



console.log('Loaded');

//npx webpack watch változik automatan ahogy a projekt is