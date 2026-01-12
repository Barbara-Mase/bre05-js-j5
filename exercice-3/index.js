let body = document.querySelector('body');
let lienWiki = document.createElement('a');

let textLienWiki = document.createTextNode("Le lorem ipsum (également appelé faux-texte, lipsum, ou bolo bolo[1]) est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. ")
lienWiki.appendChild(textLienWiki);
lienWiki.setAttribute('href', 'https://fr.wikipedia.org/wiki/Lorem_ipsum')

body.appendChild(lienWiki);

