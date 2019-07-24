// duration of scroll animation
var scrollDuration = 100;
// paddles
var leftPaddle = document.getElementsByClassName('left-paddle');
var rightPaddle = document.getElementsByClassName('right-paddle');
// get items dimensions
//var itemsLength = $('.item').length;
var itemsLength = document.getElementsByClassName('item').length;

//var itemSize = $('.item').outerWidth(true);
var itemSize =  700;
console.log(itemSize)
console.log( document.getElementsByClassName('item').clientWidth);
// get some relevant size for the paddle triggering point
var paddleMargin = 20;
var txt = "Height with padding and border: " + document.getElementById('menu-wrapper').offsetWidth + "px<br>";
console.log(txt)
//console.log(document.querySelectorAll('item').offsetWidth)
// get wrapper width
var getMenuWrapperSize = function() {
    //return $('.menu-wrapper').outerWidth();
    //console.log(document.getElementById('menu-wrapper').offsetWidth);
    //console.log( $('.menu-wrapper').outerWidth())
    //return document.getElementsByClassName('menu-wrapper').outerWidth();
    //return document.getElementsByClassName('menu-wrapper').width()
    return document.getElementById('menu-wrapper').offsetWidth
}
var menuWrapperSize = getMenuWrapperSize();
// the wrapper is responsive
//$(window).on('resize', function() {
    window.addEventListener('resize', function(event) {
	menuWrapperSize = getMenuWrapperSize();
});
// size of the visible part of the menu is equal as the wrapper size 
var menuVisibleSize = menuWrapperSize;

// get total width of all menu items
var getMenuSize = function() {
	return itemsLength * itemSize;
};
var menuSize = getMenuSize();
// get how much of menu is invisible
var menuInvisibleSize = menuSize - menuWrapperSize;
console.log(menuInvisibleSize)
console.log(menuSize)
console.log(menuWrapperSize)

// get how much have we scrolled to the left
var getMenuPosition = function() {
    //return $('.menu').scrollLeft();
    return document.getElementById('menu').scrollLeft;
    console.log(document.getElementById('menu').scrollLeft)
};

// finally, what happens when we are actually scrolling the menu
//$('.menu').on('scroll', function() {
    document.getElementById('menu').addEventListener('scroll', function(){
	// get how much of menu is invisible
	menuInvisibleSize = menuSize - menuWrapperSize;
	// get how much have we scrolled so far
    var menuPosition = getMenuPosition();
    //console.log(menuPosition)

    var menuEndOffset = menuInvisibleSize - paddleMargin;
    console.log(menuEndOffset)

	// show & hide the paddles 
	// depending on scroll position
	if (menuPosition <= paddleMargin) {
    console.log(menuPosition)
    console.log(paddleMargin)
    console.log(menuEndOffset)
        document.getElementById('left-paddle').classList.add('hidden');
        document.getElementById('right-paddle').classList.remove('hidden');
		//$(rightPaddle).removeClass('hidden');
	} else if (menuPosition < menuEndOffset) {
        document.getElementById('left-paddle').classList.remove('hidden');
        document.getElementById('right-paddle').classList.remove('hidden');
       
	} else if (menuPosition >= menuEndOffset) {
        //document.getElementById('left-paddle').classList.remove('hidden');
        //document.getElementsByClassName('left-paddle').removeClass('hidden');
        //$(rightPaddle).addClass('hidden');
        //rightPaddle.addClass('hidden');
        //$(leftPaddle).removeClass('hidden');
        document.getElementById('left-paddle').classList.remove('hidden');
        document.getElementById('right-paddle').classList.add('hidden');
		//$(rightPaddle).addClass('hidden');
}

	// print important values
	$('#print-wrapper-size span').text(menuWrapperSize);
	$('#print-menu-size span').text(menuSize);
	$('#print-menu-invisible-size span').text(menuInvisibleSize);
	$('#print-menu-position span').text(menuPosition);

});

// scroll to left
let translate = 0;
document.getElementById('right-paddle').addEventListener('click', function() {
    
    //scrollLeft= menuInvisibleSize;
    var timer;
    //document.getElementById('menu').scrollLeft += menuInvisibleSize;
  
		// actual callback
        console.log( "Firing!" );
        $('.menu').animate( { scrollLeft: menuInvisibleSize-100}, scrollDuration);

  
  
}

);

// scroll to right
document.getElementById('left-paddle').addEventListener('click', function() {
    //document.getElementById('menu').scrollLeft = 0;
	$('.menu').animate( { scrollLeft: '0' }, scrollDuration);
});