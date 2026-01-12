let preparation = document.querySelector('ol');
let fondreChocolat = document.querySelector('ol li:first-of-type');
let four = document.createElement('li');

let fourText = document.createTextNode('Préchauffer le four');
four.appendChild(fourText)

preparation.insertBefore(four, fondreChocolat);