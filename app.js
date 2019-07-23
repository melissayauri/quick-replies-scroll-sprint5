var button = document.getElementById('slide');
button.onclick = function () {
    var container = document.getElementById('containers');
    sideScroll(container,'right',10,100,10);
};

var back = document.getElementById('slideBack');
back.onclick = function () {
    var container = document.getElementById('containers');
    sideScroll(container,'left',25,100,10);
};

function sideScroll(element,direction,speed,distance,step){
    scrollAmount = 0;
    var slideTimer = setInterval(function(){
        if(direction == 'left'){
            element.scrollLeft -= step;
        } else {
            element.scrollLeft += step;
        }
        scrollAmount += step;
        if(scrollAmount >= distance){
            window.clearInterval(slideTimer);
            console.log(scrollAmount)
        }
    }, speed);
}


///
const slider = document.querySelector('.items');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mousemove', (e) => {
  if(!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 3; //scroll-fast
  slider.scrollLeft = scrollLeft - walk;
  console.log(walk);
});


var elementoTouch= document.getElementById("areaTactil");
//posteriormente asignamos el manejador de eventos lo cual
// se hace de manera convencional.
elementoTouch.addEventListener('touchstart', function(event){
  //Comprobamos si hay varios eventos del mismo tipo
  if (event.targetTouches.length == 1) { 
  var touch = event.targetTouches[0]; 
  // con esto solo se procesa UN evento touch
  alert(" se ha producido un touchstart en las siguientes cordenas: X " + touch.pageX + " en Y " + touch.pageY);
  }
  
  }, false);