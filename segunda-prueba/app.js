HTMLElement.prototype.canScrollLeft = function canScroll () {
    return this.scrollLeft > 0;
  };
  
  HTMLElement.prototype.canScrollRight = function canScroll () {
    return this.scrollWidth - this.offsetWidth > this.scrollLeft;
  };
  
  document.addEventListener('DOMContentLoaded', function manipulateDOM () {
    var container = document.getElementById('js-container'),
        leftArrow = document.getElementById('js-left-arrow'),
        rightArrow = document.getElementById('js-right-arrow');
  
    leftArrow.addEventListener('click', function scrollLeft () {
      scrollTo(container, container.scrollLeft - 240, 400);
    });
  
    rightArrow.addEventListener('click', function scrollRight () {
      scrollTo(container, container.scrollLeft + 240, 400);
    });
  
    container.addEventListener('scroll', indicateScrollability);
    indicateScrollability();
  
    function indicateScrollability () {
  
      leftArrow.classList.toggle( 'isVisible', container.canScrollLeft() );
      rightArrow.classList.toggle( 'isVisible', container.canScrollRight() );
    };
  
  });
  
  /*
    ScrollTo animation using pure javascript and no jquery
    https://gist.github.com/andjosh/6764939
    MODIFIED: s/top/left for horizontal scrolling
   */
  function scrollTo(element, to, duration) {
      var start = element.scrollLeft,
          change = to - start,
          currentTime = 0,
          increment = 20;
          
      var animateScroll = function(){        
          currentTime += increment;
          var val = Math.easeInOutQuad(currentTime, start, change, duration);
          element.scrollLeft = val;
          if(currentTime < duration) {
              setTimeout(animateScroll, increment);
          }
      };
      animateScroll();
  }
  
  //t = current time
  //b = start value
  //c = change in value
  //d = duration
  Math.easeInOutQuad = function (t, b, c, d) {
    t /= d/2;
      if (t < 1) return c/2*t*t + b;
      t--;
      return -c/2 * (t*(t-2) - 1) + b;
  };
  