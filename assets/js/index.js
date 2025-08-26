let fecha = new Date();
console.log('data',fecha.getFullYear())
document.getElementById("data_footer").innerHTML=fecha.getFullYear();


function Show_Section(arg){

    if(arg=="descarga"){
            
          document.getElementById("section1").classList.replace('container-slide-text','oculto_section');
          document.getElementById("section2").classList.replace('oculto_section', 'MiniStock_container'); 
          
          document.getElementById("item-link-inicio").classList.remove('active');
          document.getElementById("item-link-descarga").classList.add("active") 
    }

    if(arg=="home"){

  
      document.getElementById("section2").classList.replace('MiniStock_container','oculto_section');
      document.getElementById("section1").classList.replace('oculto_section', 'container-slide-text');

    
    }

}
/**********SLIDER SHOW*****************/

let slideIndex = 0;
let currentSlide = 0;

let array =["assets/image/Jumbotron.png","assets/image/stock.png","assets/image/Setting.png","assets/image/Pos.png"]


function plusSlides(n) {

  showSlides(slideIndex += n);

}


showSlides();

//console.log(document.getElementsByClassName("article")[0].style.backgroundImage = "url('"+array[0]+ "')")

function showSlides() {

        let i;
        let slides = document.getElementsByClassName("article");

        for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1}
        slides[slideIndex-1].style.display = "block";
       document.getElementsByClassName("article")[slideIndex-1].style.backgroundImage = "url('"+array[slideIndex-1]+ "')"
       document.getElementsByClassName("article")[slideIndex-1].style.backgroundPosition = "center center"
       document.getElementsByClassName("article")[slideIndex-1].style.backgroundSize = "100% 100%"
       document.getElementsByClassName("article")[slideIndex-1].style.backgroundRepeat = "no-repea"
       document.getElementsByClassName("article")[slideIndex-1].style.height = "-webkit-fill-available"

       setTimeout(showSlides, 8000); // Change image every 2 seconds


}
/**********SLIDER SHOW*****************/
/*************************************************************/
/***************************************/
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
  link.addEventListener('click', function() {
    // Remover la clase "active" de todos los enlaces
    navLinks.forEach(link => link.classList.remove('active'));
    
    // Agregar la clase "active" al enlace seleccionado
    this.classList.add('active');
  });
});


/***************************************/