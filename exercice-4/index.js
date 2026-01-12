window.addEventListener("DOMContentLoaded", () => {
    let todos = [
        "Rappeler l'école",
        "Faire les courses",
        "Récupérer le colis à la Poste",
        "Faire la litière du chat",
        "Ranger le bureau"
    ];

    
    
    for (let i = 0; i < todos.length; i++) {
        let body = document.querySelector('body');
        let undorderedList = document.createElement('ul'); 
        body.appendChild(undorderedList);
        let li = document.createElement('li');
        let liText = document.createTextNode(todos[i]);
        li.appendChild(liText);
        undorderedList.appendChild(li);
    }
    
    let lis = document.querySelectorAll('li');
    
    for (let li of lis) {

        li.addEventListener("click", (event) => {
            let lineThrough = li.style.textDecorationLine;
            li.style.textDecorationLine = "line-through";
        });
            
    }
    
});



