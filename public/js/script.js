var bt_menu = document.getElementById('header-menu');
var menu_hidden = document.getElementById('menu-hiddem-sup');
var close_menu = document.getElementById('close-menu');
var menus_opcoes = document.querySelectorAll('#menu-hiddem-sup a');


bt_menu.addEventListener("click", function(){
  menu_hidden.classList.toggle('active');
});
close_menu.addEventListener("click", function(){
  menu_hidden.classList.toggle('active');
});

menus_opcoes.forEach(function(ele){
  ele.addEventListener("click", function(){
    menu_hidden.classList.toggle('active');
  });
});


//  botão voltar para o topo

$(document).ready(function(){
  $(window).scroll(function(){
    if (this.scrollY > 500) {
      $('#btn-scroll-top').addClass('active');
    }else{
      $('#btn-scroll-top').removeClass('active');
    }
  });

  $("#btn-scroll-top").click(function(){
    $('html').animate({scrollTop:0});
  });
});