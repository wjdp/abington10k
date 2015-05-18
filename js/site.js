$(function() {
  var scroll_offset = 16

  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        distance = Math.abs(target.offset().top - $( document ).scrollTop()) / 3
        speed = distance;
        position = target.offset().top - $('.site-nav').height() - scroll_offset
        $('html,body').animate({
          scrollTop: position
        }, speed);
        return false;
      }
    }
  });

  $( document ).scroll(function(){
    if ($( '.site-header' ).height() < $( document ).scrollTop()) {
      $('.site-nav').addClass('site-nav-fixed')
      $('.site-header').css('margin-bottom', $('.site-nav').height())
    }
    else {
      $('.site-nav').removeClass('site-nav-fixed')
      $('.site-header').css('margin-bottom', 0)

    }
  });

  var aChildren = $(".site-nav .wrapper").children(); // find the a children of the list items
  var aArray = []; // create the empty aArray
  for (var i=0; i < aChildren.length; i++) {
      var aChild = aChildren[i];
      var ahref = $(aChild).attr('href').substr(1);
      aArray.push(ahref);
  } // this for loop fills the aArray with attribute href values
  console.log(aArray)
  $(window).scroll(function(){
      var windowPos = $(window).scrollTop() + $('.site-nav').height() + scroll_offset; // get the offset of the window from the top of page
      var windowHeight = $(window).height(); // get the height of the window
      var docHeight = $(document).height();

      for (var i=0; i < aArray.length; i++) {
          var theID = aArray[i];
          var divPos = $(theID).offset().top; // get the offset of the div from the top of page
          var divHeight = $(theID).height(); // get the height of the div in question

          if (windowPos >= divPos && windowPos < (divPos + divHeight)) {
              $("a[href='/" + theID + "']").addClass("nav-active");
          } else {
              $("a[href='/" + theID + "']").removeClass("nav-active");
          }
      }

      if(windowPos + windowHeight == docHeight) {
          if (!$("nav li:last-child a").hasClass("nav-active")) {
              var navActiveCurrent = $(".nav-active").attr("href");
              $("a[href='" + navActiveCurrent + "']").removeClass("nav-active");
              $("nav li:last-child a").addClass("nav-active");
          }
      }
  });
});