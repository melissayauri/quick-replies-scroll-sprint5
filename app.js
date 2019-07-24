var button = document.getElementById('slide');
button.onclick = function () {
    var container = document.getElementById('containers');
    sideScroll(container,'right',10,100,10);
    //console.log(distance)
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
           console.log(distance)
        } else {
            element.scrollLeft += step;
        }
        scrollAmount += step;
        if(scrollAmount >= distance){
            window.clearInterval(slideTimer);
            console.log(scrollAmount)
            console.log(distance)
        }
    }, speed);
}


///
const slider = document.querySelector('.items');
let isDown = false;
let startX;
let scrollLeft;
console.log(document.getElementById('containers').offsetWidth)
slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
  console.log(startX)
  console.log(scrollLeft)
  if(startX>scrollLeft){
    console.log('derecha')
    //document.getElementById('slide').classList.add('hide');
    //document.getElementById('slideBack').classList.remove('hide');
  }else{
    console.log('izquierda')
   // document.getElementById('slide').classList.add('hide');
  }
});
slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
  console.log('mouseleave')
});
slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
  console.log('mouseup')
});
slider.addEventListener('mousemove', (e) => {
  if(!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  //console.log(x)
  const walk = (x - startX) * 3; //scroll-fast
  slider.scrollLeft = scrollLeft - walk;
  //console.log(walk);
  
});


