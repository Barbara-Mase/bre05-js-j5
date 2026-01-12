window.addEventListener('DOMContentLoaded', () => {


    let box1 = document.getElementById('box-1')
    
    box1.addEventListener('click', (event) => {
        
        let cross = document.createTextNode('x')
        box1.appendChild(cross);
    })
});

