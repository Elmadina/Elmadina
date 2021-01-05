  /* header list--------------------------------------------------------------------------------------------*/
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
  
  /* slide show --------------------------------------------------------------------------------------------*/
  

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlidesb");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 4000); // Change image every 2 seconds
}




  var slideIndexa = 1;
showSlidesa(slideIndexa);

function plusSlidesa(n) {
  showSlidesa(slideIndexa += n);
}

function currentSlidea(n) {
  showSlidesa(slideIndexa = n);
}

function showSlidesa(n) {
  var i;
  var slidesa = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slidesa.length) {slideIndexa = 1}    
  if (n < 1) {slideIndexa = slidesa.length}
  for (i = 0; i < slidesa.length; i++) {
      slidesa[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slidesa[slideIndexa-1].style.display = "block";  
  dots[slideIndexa-1].className += " active";
}




var slideIndexabb = 1;
showSlidesabb(slideIndexabb);

function plusSlidesabb(nbb) {
  showSlidesabb(slideIndexabb += nbb);
}

function currentSlideabb(nbb) {
  showSlidesabb(slideIndexabb = nbb);
}

function showSlidesabb(nbb) {
  var ibb;
  var slidesabb = document.getElementsByClassName("mySlidesbb");
  var dotsbb = document.getElementsByClassName("dotbb");
  if (nbb > slidesabb.length) {slideIndexabb = 1}    
  if (nbb < 1) {slideIndexabb = slidesabb.length}
  for (ibb = 0; ibb < slidesabb.length; ibb++) {
      slidesabb[ibb].style.display = "none";  
  }
  for (ibb = 0; ibb < dotsbb.length; ibb++) {
      dotsbb[ibb].className = dotsbb[ibb].className.replace(" active", "");
  }
  slidesabb[slideIndexabb-1].style.display = "block";  
  dotsbb[slideIndexabb-1].className += " active";
}




var slideIndexaa = 1;
showSlidesaa(slideIndexaa);

function plusSlidesaa(na) {
  showSlidesaa(slideIndexaa += na);
}

function currentSlideaa(na) {
  showSlidesaa(slideIndexaa = na);
}

function showSlidesaa(na) {
  var ia;
  var slidesaa = document.getElementsByClassName("mySlidesa");
  var dotsa = document.getElementsByClassName("dota");
  if (na > slidesaa.length) {slideIndexaa = 1}    
  if (na < 1) {slideIndexaa = slidesaa.length}
  for (ia = 0; ia < slidesaa.length; ia++) {
      slidesaa[ia].style.display = "none";  
  }
  for (ia = 0; ia < dotsa.length; ia++) {
      dotsa[ia].className = dotsa[ia].className.replace(" active", "");
  }
  slidesaa[slideIndexaa-1].style.display = "block";  
  dotsa[slideIndexaa-1].className += " active";
}


