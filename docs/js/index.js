/*global $, document, window */

window.onload = () => {
    $('.spinner').fadeOut("slow");

    var menuBar = document.getElementById('menu-bar');
    var mobNavigation = document.getElementsByClassName('mob-navigation')[0];
    var mobNavigationUl = document.getElementsByClassName('mob-navigation-ul')[0];
    var navbar = document.getElementsByClassName('navbar')[0];

    window.onresize = () => {
        mobNavigation.style.top = navbar.offsetHeight + 'px';
    }
    menuBar.onclick = () => {
        
        menuBar.classList.toggle('open');
        menuBar.classList.toggle('close');
        mobNavigation.classList.toggle('open');
        mobNavigation.style.top = navbar.offsetHeight + 'px';
        document.body.classList.toggle('stop');
    }




    // var navBarHeaight = $('nav.navbar').outerHeight(),
    //     scrollbar     = document.querySelector(".barr"),
    //     totalHeight   = document.documentElement.scrollHeight - window.innerHeight;
    // scrollbar.style = "position:absolute; display:none; bottom:0; right:0; width:100%; height:.25rem; background-color:#ffffff;";
    // var newItem = document.createElement('div');
    // newItem.style = "position:absolute; height:100%; background-color:red";
    // scrollbar.appendChild(newItem);
  
    // $('button.navbar-toggler').click(function(){
    //   if ($('button.navbar-toggler').attr('aria-expanded') == "false") {
    //     $('nav.navbar').css({
    //       "background-color": "white",
    //       "color": "white"
    //     });
    //     $('nav.navbar a').css("color","#575757");
    //     if (document.body.scrollTop <= (navBarHeaight / 3) || document.documentElement.scrollTop <= (navBarHeaight / 3)) {
    //       $('nav button.navbar-toggler').css({
    //         "color": "#ffffff",
    //         "background-color": "#454545"
    //       });
    //     } else {
    //       $('nav button.navbar-toggler').css({
    //         "color": "#454545",
    //         "background-color": "#ffffff"
    //       });
    //     }
    //     $('.barr').css("display","block");
    //   } else if ($('button.navbar-toggler').attr('aria-expanded') == "true") {
    //     if (document.body.scrollTop <= (navBarHeaight / 3) || document.documentElement.scrollTop <= (navBarHeaight / 3)) {
    //       $('nav.navbar').css({
    //         "background-color": "transparent",
    //         "color": "black"
    //       });
    //       $('nav.navbar a').css("color","white");
    //       $('nav button.navbar-toggler').css({
    //         "color": "#454545",
    //         "background-color": "#ffffff"
    //       });
    //       $('.barr').css("display","none");
    //     }
    //   }
    // });
  
    // window.onscroll = () => {
    //   var scrollbarWidth = (window.pageYOffset / totalHeight) * 100;
    //   newItem.style.width = scrollbarWidth + "%";
    //   if (document.body.scrollTop > (navBarHeaight / 3) || document.documentElement.scrollTop > (navBarHeaight / 3)) {
    //     $('nav.navbar').css({
    //       "background-color": "white",
    //       "color": "white"
    //     });
    //     $('nav.navbar a').css("color","#575757");
    //     $('nav button.navbar-toggler').css({
    //       "color": "#ffffff",
    //       "background-color": "#454545"
    //     });
    //     $('.barr').css("display","block");
    //   } else {
    //     if ($('button.navbar-toggler').attr('aria-expanded') != "true") {
    //       $('nav.navbar').css({
    //         "background-color": "transparent",
    //         "color": "black"
    //       });
    //       $('nav.navbar a').css("color","white");
    //       $('nav button.navbar-toggler').css({
    //         "color": "#454545",
    //         "background-color": "#ffffff"
    //       });
    //       $('.barr').css("display","none");
    //     }
    //   }
    //   var idArrayNav = ["#home","#about","#chef","#menu","#contact"];
    //   for (var idNav of idArrayNav) {
    //     if (($(document).scrollTop()) >= (Math.floor($(idNav).offset().top))) {
    //       $('.nav-item > a[href="' + idNav + '"]').parent().addClass("active").siblings().removeClass("active");
    //     }
    //   }
  
    //   if (document.body.scrollTop >= (document.body.scrollHeight * .25) || document.documentElement.scrollTop >= (document.body.scrollHeight * .25)) {
    //     $('.goTop').css({
    //       "right": "1rem"
    //     });
    //   } else {
    //     $('.goTop').css({
    //       "right": "-5rem"
    //     });
    //   }

  }


