function openModal() {
  document.getElementById("myModal").style.display = "block";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  // dots[slideIndex-1].className += " active";
  // captionText.innerHTML = dots[slideIndex-1].alt;
}
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

$('.imagen-principal')
      // tile mouse actions
      .on('click', function(){
        var escala = $(this).children('.imagen-principal__image');

        switch (escala[0].style.transform) {

          case 'scale(1)':
          $(this).children('.imagen-principal__image').css({'transform': 'scale('+ $(this).attr('data-scale') +')'});
          $(this).children('.imagen-principal__image').css({'cursor': 'zoom-out'});
          break;

          case 'scale(2)':
          $(this).children('.imagen-principal__image').css({'transform': 'scale(1)'});
          $(this).children('.imagen-principal__image').css({'cursor': 'zoom-in'});
          break;

          default:
          $(this).children('.imagen-principal__image').css({'cursor': 'zoom-out'});          
          $(this).children('.imagen-principal__image').css({'transform': 'scale('+ $(this).attr('data-scale') +')'});

        }
      })
      .on('mousemove', function(e){
        $(this).children('.imagen-principal__image').css({'transform-origin': ((e.pageX - $(this).offset().left) / $(this).width()) * 100 + '% ' + ((e.pageY - $(this).offset().top) / $(this).height()) * 100 +'%'});
      })
      // tiles set up
      .each(function(){
        $(this)
          // add a image container
          .append('<div class="imagen-principal__image"></div>')
          // set up a background image for each tile based on data-image attribute
          .children('.imagen-principal__image').css({'background-image': 'url('+ $(this).attr('data-image') +')'});
      });
