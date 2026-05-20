document.addEventListener('DOMContentLoaded', () => {
    
    const rayasBtn = document.getElementById('rayas-open');
    
    const listaMenu = document.querySelector('.menu');

    
    rayasBtn.addEventListener('click', () => {
       
        listaMenu.classList.toggle('active');
        
        
        rayasBtn.classList.toggle('is-active');
    });
});