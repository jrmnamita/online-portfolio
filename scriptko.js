/*$(document).ready(function(){
    $("#flip").click(function(){
        $("#panel").slideDown("slow");
    });
});*/
/*window.scrollTo(0,document.body.scrollHeight);


$(function() {
  $('a[href*=#]').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
  });
});*/
$(function(){
	var displaymo = $('.pogi');
	var windowH = $(window).height(),
		documElem = $(document),
		slideDownPage = $('.slide-down-page'),
		content = $('.content'),
		btns =$('.btn'),
		animSpeed = 500;
		
		slideDownPage.css({
			height: windowH + 'px',
			top: -windowH + 'px'
		});
		
		btns.on('click',function(e){
			if ( $(this).hasClass('open') ){
				slideDownPage.animate({'top':0},animSpeed);
				content.animate({'margin-top': windowH+'px'},animSpeed);
				displaymo.hide(250);
			}
			else{
				slideDownPage.animate({'top':-windowH +'px'},animSpeed);
				content.animate({'margin-top':0},animSpeed);
				displaymo.show(250);
			}
			e.preventDefault();
		});
		
		documElem.on('scroll',function(){
			if ( $(this).scrollTop() < slideDownPage.height() && slideDownPage.css('top') === '0px'){
				slideDownPage.css('top', -windowH +'px');
				content.css('margin-top', 0);
				displaymo.show(500);
				documElem.scrollTop();
			}
		});
		
		$('.kulas img:first').addClass('top');
		var change = function (){
     		var curr = $('.kulas img.top');
			var next = curr.next(); 

			// if the next image is not available then 
			// set the class-top to the first image
			// then vanish the current image to
			// show the previous next image
			if(!next.length){

				next = $('.kulas img:first');
				next.addClass('top');
		        
		        curr.animate({opacity: 0.0},1000, function() {
		            curr.removeClass('top');
		            curr.css({opacity: 1.0});
		        });

			}else{

				// pick the next image
				// set the opacity to 0
				// den use animation to make it appear
				// above the top image
				next.css({opacity: 0.0})
		        .addClass('top')
		        .animate({opacity: 1.0}, 1000, function() {
		            curr.removeClass('top');
		        });
		    }
     }

    // repeat the function execution for every 3 secs
    setInterval(change, 2000 );
});
/*$(document).ready(function(){

var images = Array("images/orginal.jpg",
               "images/gray.jpg");
var currimg = 0;


function loadimg(){

   $('#background').animate({ opacity: 1 }, 500,function(){

        //finished animating, minifade out and fade new back in           
        $('#background').animate({ opacity: 0.7 }, 100,function(){

            currimg++;

            if(currimg > images.length-1){

                currimg=0;

            }

            var newimage = images[currimg];

            //swap out bg src                
            $('#background').css("background-image", "url("+newimage+")"); 

            //animate fully back in
            $('#background').animate({ opacity: 1 }, 400,function(){

                //set timer for next
                setTimeout(loadimg,5000);

            });

        });

    });

  }
  setTimeout(loadimg,5000);

});

$(function changeImage(){
    var img = document.getElementById("img");
    img.src = images[x];
    x++;

    if(x >= images.length){
        x = 0;
    } 
   var timerid = setInterval(changeImage(), 1000);
   
	var images = [], x = 0;
	images[0] = "images/original.jpg";
	images[1] = "images/gray.jpg";
});*/