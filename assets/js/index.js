let fecha = new Date();
console.log('data',fecha.getFullYear())
document.getElementById("data_footer").innerHTML=fecha.getFullYear();


function Show_Section(arg){

    if(arg=="descarga"){
            
            document.getElementById("section1").classList.replace('slider','oculto_section');
                    document.getElementById("section2").classList.replace('oculto_section', 'MiniStock_container'); 
    
            }

    if(arg=="home"){

  
   document.getElementById("section2").classList.replace('MiniStock_container','oculto_section');
       document.getElementById("section1").classList.replace('oculto_section', 'slider');


            
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



 console.log(document.getElementsByClassName("article")[0].style.backgroundImage = "url('"+array[0]+ "')")

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

        setTimeout(showSlides, 8000); // Change image every 2 seconds


}
/**********SLIDER SHOW*****************/