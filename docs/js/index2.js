/*global $, document, window */

window.onload = () => {
  $('.spinner').fadeOut("slow");
  var navBarHeaight = $('nav.navbar').outerHeight(),
      scrollbar     = document.querySelector(".barr"),
      totalHeight   = document.documentElement.scrollHeight - window.innerHeight;
  scrollbar.style = "position:absolute; display:none; bottom:0; right:0; width:100%; height:.25rem; background-color:#ffffff;";
  var newItem = document.createElement('div');
  newItem.style = "position:absolute; height:100%; background-color:red";
  scrollbar.appendChild(newItem);

  $('button.navbar-toggler').click(function(){
    if ($('button.navbar-toggler').attr('aria-expanded') == "false") {
      $('nav.navbar').css({
        "background-color": "white",
        "color": "white"
      });
      $('nav.navbar a').css("color","#575757");
      if (document.body.scrollTop <= (navBarHeaight / 3) || document.documentElement.scrollTop <= (navBarHeaight / 3)) {
        $('nav button.navbar-toggler').css({
          "color": "#ffffff",
          "background-color": "#454545"
        });
      } else {
        $('nav button.navbar-toggler').css({
          "color": "#454545",
          "background-color": "#ffffff"
        });
      }
      $('.barr').css("display","block");
    } else if ($('button.navbar-toggler').attr('aria-expanded') == "true") {
      if (document.body.scrollTop <= (navBarHeaight / 3) || document.documentElement.scrollTop <= (navBarHeaight / 3)) {
        $('nav.navbar').css({
          "background-color": "transparent",
          "color": "black"
        });
        $('nav.navbar a').css("color","white");
        $('nav button.navbar-toggler').css({
          "color": "#454545",
          "background-color": "#ffffff"
        });
        $('.barr').css("display","none");
      }
    }
  });

  window.onscroll = () => {
    var scrollbarWidth = (window.pageYOffset / totalHeight) * 100;
    newItem.style.width = scrollbarWidth + "%";
    if (document.body.scrollTop > (navBarHeaight / 3) || document.documentElement.scrollTop > (navBarHeaight / 3)) {
      $('nav.navbar').css({
        "background-color": "white",
        "color": "white"
      });
      $('nav.navbar a').css("color","#575757");
      $('nav button.navbar-toggler').css({
        "color": "#ffffff",
        "background-color": "#454545"
      });
      $('.barr').css("display","block");
    } else {
      if ($('button.navbar-toggler').attr('aria-expanded') != "true") {
        $('nav.navbar').css({
          "background-color": "transparent",
          "color": "black"
        });
        $('nav.navbar a').css("color","white");
        $('nav button.navbar-toggler').css({
          "color": "#454545",
          "background-color": "#ffffff"
        });
        $('.barr').css("display","none");
      }
    }
    var idArrayNav = ["#home","#about","#chef","#menu","#contact"];
    for (var idNav of idArrayNav) {
      if (($(document).scrollTop()) >= (Math.floor($(idNav).offset().top))) {
        $('.nav-item > a[href="' + idNav + '"]').parent().addClass("active").siblings().removeClass("active");
      }
    }

    if (document.body.scrollTop >= (document.body.scrollHeight * .25) || document.documentElement.scrollTop >= (document.body.scrollHeight * .25)) {
      $('.goTop').css({
        "right": "1rem"
      });
    } else {
      $('.goTop').css({
        "right": "-5rem"
      });
    }

    function startAnimation(elementSelector, animationClass) {
      var top_of_element = $(elementSelector).offset().top;
      var bottom_of_element = $(elementSelector).offset().top + $(elementSelector).outerHeight();
      var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
      var top_of_screen = $(window).scrollTop();
  
      if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
          $(elementSelector).addClass(animationClass);
      }
    }

    startAnimation("#rightCome","rightCome");
    startAnimation("#botCome","botComeCircle");
    startAnimation("#chef-1","leftComeCircle");
    startAnimation("#chef-2","botComeCircle");
    startAnimation("#chef-3","rightComeCircle");

  }

  document.getElementById('chef-1').onanimationend = () => {
    document.getElementById('chef-1').style.clipPath = 'circle(5% at 50% 50%)';
    document.getElementById('chef-1').classList.add('leftComeCircleEnd');
    document.getElementById('chef-1').onanimationend = () => {
      document.getElementById('chef-1').style.clipPath = 'circle(100% at 50% 50%)';
    }
  }

  document.getElementById('chef-2').onanimationend = () => {
    document.getElementById('chef-2').style.clipPath = 'circle(5% at 50% 50%)';
    document.getElementById('chef-2').classList.add('upComeCircleEnd');
    document.getElementById('chef-2').onanimationend = () => {
      document.getElementById('chef-2').style.clipPath = 'circle(100% at 50% 50%)';
    }
  }
  
  document.getElementById('chef-3').onanimationend = () => {
    document.getElementById('chef-3').style.clipPath = 'circle(5% at 50% 50%)';
    document.getElementById('chef-3').classList.add('rightComeCircleEnd');
    document.getElementById('chef-3').onanimationend = () => {
      document.getElementById('chef-3').style.clipPath = 'circle(100% at 50% 50%)';
    }
  }

  document.getElementById('botCome').onanimationend = () => {
    document.getElementById('botCome').style.clipPath = 'circle(5% at 50% 50%)';
    document.getElementById('botCome').classList.add('botComeCircleEnd');
    document.getElementById('botCome').onanimationend = () => {
      document.getElementById('botCome').style.clipPath = 'circle(100% at 50% 50%)';
    }
  }

  $('li.nav-item').click(function(){
    $(this).addClass("active").siblings().removeClass("active");
  });


  function filterSelector(selector, selected, classAct) { // 07/02/2020 need jQuery
    if ($(selector).hasClass(classAct)) {
      var classSlection = $(selector + "." + classAct).attr('option'),
          slecetedItem  = document.querySelectorAll(selected);
      for (var item of slecetedItem) {
        if (classSlection == "all") {
          $(selected).addClass(classAct);
        } else {
          if (item.classList.contains(classSlection)) {
            item.classList.add(classAct);
          } else {
            item.classList.remove(classAct);
          }
        }
      }
    }
    $(selector).click(function(){
      $(this).addClass(classAct).siblings().removeClass(classAct);
    });
    $(selector).click(function(){
      var classSlection = $(this).attr('option'),
          slecetedItem  = document.querySelectorAll(selected);
      for (var item of slecetedItem) {
        if (classSlection == "all") {
          item.classList.add(classAct);
        } else {
          if (item.classList.contains(classSlection)) {
            item.classList.add(classAct);
          } else {
            item.classList.remove(classAct);
          }
        }
      }
    });
  }

  $('.owl-carousel.num-1').owlCarousel({
    animateOut:"fadeOut",
    loop:true,
    items:1,
    autoplay:true,
    autoplayTimeout:3500,
    autoplayHoverPause: false,
    dots:true,
    dotsEach:true,
  })

  $('.owl-carousel.num-2').owlCarousel({
    loop:true,
    items:1,
    autoplay:true,
    autoplayTimeout:3500,
    autoplayHoverPause: false,
    dots:true,
    dotsEach:true,
  })

}
