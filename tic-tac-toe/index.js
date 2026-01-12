window.addEventListener('DOMContentLoaded', () => {
    
    let boxes = document.querySelectorAll("div")
    
    //ajouter cercle
    function addCircle (box) {
        let circle = document.createTextNode('o');
        box.appendChild(circle);
    }
    

    
    function getFirstEmptyBox(boxes, emptyBox) {
        for (let box of boxes) {
            if(box.textContent.trim() === "") {
                let emptyBox = box;
            }
        }
        return emptyBox;
     }
     
    let affichage = getFirstEmptyBox(boxes); 
    console.log(affichage)

    function addCross(emptyBox) {
        let cross = document.createTextNode('x');
        emptyBox.appendChild(cross);

    }
       
    
    // TEST fonction play
    function play(boxes, emptyBox) {
        for (let box of boxes) {
            box.addEventListener('click', (event) => {
                addCircle(box);
                addCross(emptyBox);
            });
        }
    }
        
    play(boxes);
    
});




//Récupération de la boite
// function getBox () {
//     let boxes = document.querySelectorAll("div:not(:first-of-type)")
// }





// function play (boxes) {
//     getBox();
//     boxes.addEventListener('click', (event) => {
//         for (let box of boxes) {
//             addCircle();
//         }
//     });
// }

// play()

