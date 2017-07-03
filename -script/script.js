(function ($) {

var
    $progetto = $('.progettoIns'),
    $loader = $('.loader'),
    $body = $(document.body),
    $bianco = $('.bianco'),
    $sidebar = $('.sidebarCont'),
    $cos = $('.linkHome'),
    $sidebarOpener = $('.linkHome, .puntoInterrogativo'),
    $sidebarCloser = $('.bianco, .x'),
    $header = $('.headerCont'),
    $window = $(window)
    random = Math.floor((Math.random() * 12))
    colors = ["AF1B3F","81C14B","B4E33D","F7FF58","EE5622","6610F2","CBDFBD","508991","FFC6AC","534B52","1CFEBA","ED6A5A"];

      function clickOnProject(e) {
        $this = $(this);

          $this.find( ".loader" ).addClass('heightLoader');
          setTimeout(function(){
              $this.children( ".progetto" ).addClass('big');
            },600);
            var idHtml = this.id;
            console.log(idHtml);
            setTimeout(function(){
                var indirizzo = ' '  + idHtml + '.html';

                  window.location.replace(indirizzo);

              },1500);
      }


        function moveSidebar(){
            $sidebar.addClass('is-Active');
            if ($(window).width() > 700 ){
                $bianco.addClass('showWhite');
            }

        }

        function closeSidebar(){
            $sidebar.removeClass('is-Active');
            if ($(window).width() > 700 ){
                $bianco.removeClass('showWhite');
            }
        }

        function headerScroll(){
          var y = $(this).scrollTop();

          if (y > 400) {

          $header.addClass('attivo');


          } else {
            $header.removeClass('attivo');
          }

        }

        function randomColor(){

          var c = "#" + colors[random];
          $loader.css('background-color', c);
        }



$(document).ready(function(){

randomColor();

$sidebarOpener.on('click', moveSidebar);
$sidebarCloser.on('click', closeSidebar);
$progetto.on('click', clickOnProject);
$(window).on('scroll', headerScroll);


});




})(jQuery);
