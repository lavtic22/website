/*!
    * Start Bootstrap - Agency v6.0.2 (https://startbootstrap.com/template-overviews/agency)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
    */
    (function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top - 72,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#mainNav",
        offset: 74,
    });

    // Collapse Navbar
    var navbarCollapse = function () {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);
})(jQuery); // End of use strict



var mouseX = 0, mouseY = 0, limitX = 15, limitY = 15;

// cache the selector
var follower = null; 
var xp = 0, yp = 0;

$(window).mousemove(function(e) {
    var $elem = $(document.elementFromPoint(e.pageX, e.pageY));
    
    if($elem.attr("class") == "containeri") {
        var offset = $elem.offset();
    
        mouseX = Math.min(e.pageX - offset.left, $elem.width() - limitX);
        mouseY = Math.min(e.pageY - offset.top, $elem.height() - limitY);
        
        if (mouseX < 0) mouseX = 0;
        if (mouseY < 0) mouseY = 0;
    
        
        // change 12 to alter damping higher is slower
        xp += (mouseX - xp) / 12;
        yp += (mouseY - yp) / 12;
        
        var loop = setInterval(function() {
            $elem.find(".follower").css({left:xp, top:yp}); 
        }, 30);
    }
});






   
    


