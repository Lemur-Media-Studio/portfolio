// LOADER
window.addEventListener('load',()=>{
    $('.loader').delay(400).fadeOut('slow', ()=>{console.log('Finalizar loader')});
    //MUESTRO EL CUERPO DE LA PAGINA
    $('.cuerpo').delay(1000).fadeIn('slow',()=>{console.log('Body cargado')});
})

/* document.getElementById("calificacion").addEventListener("click", function(event){
    event.preventDefault()
}); */