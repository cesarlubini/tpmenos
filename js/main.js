//Parallax Funcion////////////////////////////////////////////////////////////////////////////
$(document).ready(function(){
  $window = $(window);
  //Captura cada elemento section com o data-type "background"
  $('section[data-type="background"]').each(function(){
      var $scroll = $(this);   
          //Captura o evento scroll do navegador e modifica o backgroundPosition de acordo com seu deslocamento.            
          $(window).scroll(function() {
              var yPos = -($window.scrollTop() / $scroll.data('speed')); 
              var coords = '50% '+ yPos + 'px';
              $scroll.css({ backgroundPosition: coords });    
          });
 });  
}); 


$('body').scrollspy({ target: '#myNavbar' })

//Smooth Scroll///////////////////////////////////////////////////////////////////////////////

$(document).ready(function(){
    // Add smooth scrolling to all links
    $("#myNavbar a").on('click',scrollSmooth);
    $("a.btn").on('click',scrollSmooth);
  });

function scrollSmooth(event) {

// Make sure this.hash has a value before overriding default behavior
if (this.hash !== "") {
    // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash
    var hash = this.hash;

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate({
    scrollTop: $(hash).offset().top-91
    }, 800);
    }
}

//menu toggle/////////////////////////////////////////////////////////////////////////////////

let botaoMenu = document.querySelector('.navbar-header button');
let menuPrincipal = document.querySelector('#myNavbar');

botaoMenu.onclick = function () {
    menuPrincipal.classList.toggle('visible');
}

$('.js-scroll-trigger').click(function() {
    menuPrincipal.classList.remove('visible');
});