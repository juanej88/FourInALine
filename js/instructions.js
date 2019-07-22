
//Players' names and Reset Button

$(function () {

   var $startButton = $('#startButton');
   var $player1Info = $('#player1Info');
   var $smallRedToken = $('#smallRedToken')
   var $player2Info = $('#player2Info');
   var $smallYellowToken = $('#smallYellowToken')
   var $resetGame = $('#resetGame');
   var $playAgain = $('#playAgain');

   $startButton.show();
   $player1Info.hide();
   $smallRedToken.hide();
   $player2Info.hide();
   $smallYellowToken.hide();
   $resetGame.hide();
   $playAgain.show();

   $('#start').on('click', function(){
      $startButton.hide();
      $player1Info.show();
      $smallRedToken.show();
      $player2Info.hide();
      $smallYellowToken.hide();
      $resetGame.hide();
      $('#namePlayer1').focus();
   });

   $('#addButton1').on('click', function(e){
      e.preventDefault();
      var $textInput = $('#namePlayer1');
      var newText = $textInput.val();
      $('.newPlayer1').replaceWith('<h2>' + newText + '</h2>');
      $startButton.hide();
      $player1Info.hide();
      $smallRedToken.hide();
      $player2Info.show();
      $smallYellowToken.show();
      $resetGame.hide();
      $textInput.val('');
      var newPlayerName1 = $('div.redToken').next();
      newPlayerName1.addClass('newPlayer1');
      $('#namePlayer2').focus();
   });

   $('#addButton2').on('click', function(e){
      e.preventDefault();
      var $textInput = $('#namePlayer2');
      var newText = $textInput.val();
      $('.newPlayer2').replaceWith('<h2>' + newText + '</h2>');
      $startButton.hide();
      $player1Info.hide();
      $smallRedToken.hide();
      $player2Info.hide();
      $smallYellowToken.hide();
      $resetGame.show();
      $textInput.val('');
      var newPlayerName2 = $('div.yellowToken').next();
      newPlayerName2.addClass('newPlayer2');
      tokenHovers();
   });

   $('#reset').on('click', function(){
      $startButton.hide();
      $player1Info.show();
      $smallRedToken.show();
      $player2Info.hide();
      $smallYellowToken.hide();
      $resetGame.hide();
      $('.token').addClass('tt');
      $('.token').removeClass('rt').removeClass('lessOpacity');
      $('.token').removeClass('yt').removeClass('lessOpacity');
      $('.newPlayer1').replaceWith('<h2>' + 'Player 1' + '</h2>');
      $('.newPlayer2').replaceWith('<h2>' + 'Player 2' + '</h2>');
      $('#scorePlayer1').html(0);
      $('#scorePlayer2').html(0);
      var newPlayerName1 = $('div.redToken').next();
      newPlayerName1.addClass('newPlayer1');
      var newPlayerName2 = $('div.yellowToken').next();
      newPlayerName2.addClass('newPlayer2');
      defaultHover();
   });

});

$(function (){

   var $getColor1 = $('.tokenChanger1');
   var $getColor2 = $('.tokenChanger2');
   var $getColor3 = $('.tokenChanger3');
   var $getColor4 = $('.tokenChanger4');
   var $getColor5 = $('.tokenChanger5');
   var $getColor6 = $('.tokenChanger6');
   var $getColor7 = $('.tokenChanger7');

   $('div.token') && $('.firstColumn').on('mousedown', function() {
      if ($('td.tokenChanger1').hasClass('redTokenBoard1') && $('div.f1').hasClass('tt')) {
         $getColor1.toggleClass('yellowTokenBoard1 redTokenBoard1');
         $getColor2.toggleClass('yellowTokenBoard2 redTokenBoard2');
         $getColor3.toggleClass('yellowTokenBoard3 redTokenBoard3');
         $getColor4.toggleClass('yellowTokenBoard4 redTokenBoard4');
         $getColor5.toggleClass('yellowTokenBoard5 redTokenBoard5');
         $getColor6.toggleClass('yellowTokenBoard6 redTokenBoard6');
         $getColor7.toggleClass('yellowTokenBoard7 redTokenBoard7');
      } else if ($('td.tokenChanger1').hasClass('yellowTokenBoard1') && $('div.f1').hasClass('tt')) {
         $getColor1.toggleClass('redTokenBoard1 yellowTokenBoard1');
         $getColor2.toggleClass('redTokenBoard2 yellowTokenBoard2');
         $getColor3.toggleClass('redTokenBoard3 yellowTokenBoard3');
         $getColor4.toggleClass('redTokenBoard4 yellowTokenBoard4');
         $getColor5.toggleClass('redTokenBoard5 yellowTokenBoard5');
         $getColor6.toggleClass('redTokenBoard6 yellowTokenBoard6');
         $getColor7.toggleClass('redTokenBoard7 yellowTokenBoard7');
      }
   });


   $('div.token') && $('.secondColumn').on('mousedown', function() {
      if ($('td.tokenChanger2').hasClass('redTokenBoard2') && $('div.f2').hasClass('tt')) {
         $getColor1.toggleClass('yellowTokenBoard1 redTokenBoard1');
         $getColor2.toggleClass('yellowTokenBoard2 redTokenBoard2');
         $getColor3.toggleClass('yellowTokenBoard3 redTokenBoard3');
         $getColor4.toggleClass('yellowTokenBoard4 redTokenBoard4');
         $getColor5.toggleClass('yellowTokenBoard5 redTokenBoard5');
         $getColor6.toggleClass('yellowTokenBoard6 redTokenBoard6');
         $getColor7.toggleClass('yellowTokenBoard7 redTokenBoard7');
      } else if ($('td.tokenChanger1').hasClass('yellowTokenBoard1') && $('div.f2').hasClass('tt')) {
         $getColor1.toggleClass('redTokenBoard1 yellowTokenBoard1');
         $getColor2.toggleClass('redTokenBoard2 yellowTokenBoard2');
         $getColor3.toggleClass('redTokenBoard3 yellowTokenBoard3');
         $getColor4.toggleClass('redTokenBoard4 yellowTokenBoard4');
         $getColor5.toggleClass('redTokenBoard5 yellowTokenBoard5');
         $getColor6.toggleClass('redTokenBoard6 yellowTokenBoard6');
         $getColor7.toggleClass('redTokenBoard7 yellowTokenBoard7');
      }
   });

   $('div.token') && $('.thirdColumn').on('mousedown', function() {
      if ($('td.tokenChanger2').hasClass('redTokenBoard2') && $('div.f3').hasClass('tt')) {
         $getColor1.toggleClass('yellowTokenBoard1 redTokenBoard1');
         $getColor2.toggleClass('yellowTokenBoard2 redTokenBoard2');
         $getColor3.toggleClass('yellowTokenBoard3 redTokenBoard3');
         $getColor4.toggleClass('yellowTokenBoard4 redTokenBoard4');
         $getColor5.toggleClass('yellowTokenBoard5 redTokenBoard5');
         $getColor6.toggleClass('yellowTokenBoard6 redTokenBoard6');
         $getColor7.toggleClass('yellowTokenBoard7 redTokenBoard7');
      } else if ($('td.tokenChanger1').hasClass('yellowTokenBoard1') && $('div.f3').hasClass('tt')) {
         $getColor1.toggleClass('redTokenBoard1 yellowTokenBoard1');
         $getColor2.toggleClass('redTokenBoard2 yellowTokenBoard2');
         $getColor3.toggleClass('redTokenBoard3 yellowTokenBoard3');
         $getColor4.toggleClass('redTokenBoard4 yellowTokenBoard4');
         $getColor5.toggleClass('redTokenBoard5 yellowTokenBoard5');
         $getColor6.toggleClass('redTokenBoard6 yellowTokenBoard6');
         $getColor7.toggleClass('redTokenBoard7 yellowTokenBoard7');
      }
   });

   $('div.token') && $('.fourthColumn').on('mousedown', function() {
      if ($('td.tokenChanger2').hasClass('redTokenBoard2') && $('div.f4').hasClass('tt')) {
         $getColor1.toggleClass('yellowTokenBoard1 redTokenBoard1');
         $getColor2.toggleClass('yellowTokenBoard2 redTokenBoard2');
         $getColor3.toggleClass('yellowTokenBoard3 redTokenBoard3');
         $getColor4.toggleClass('yellowTokenBoard4 redTokenBoard4');
         $getColor5.toggleClass('yellowTokenBoard5 redTokenBoard5');
         $getColor6.toggleClass('yellowTokenBoard6 redTokenBoard6');
         $getColor7.toggleClass('yellowTokenBoard7 redTokenBoard7');
      } else if ($('td.tokenChanger1').hasClass('yellowTokenBoard1') && $('div.f4').hasClass('tt')) {
         $getColor1.toggleClass('redTokenBoard1 yellowTokenBoard1');
         $getColor2.toggleClass('redTokenBoard2 yellowTokenBoard2');
         $getColor3.toggleClass('redTokenBoard3 yellowTokenBoard3');
         $getColor4.toggleClass('redTokenBoard4 yellowTokenBoard4');
         $getColor5.toggleClass('redTokenBoard5 yellowTokenBoard5');
         $getColor6.toggleClass('redTokenBoard6 yellowTokenBoard6');
         $getColor7.toggleClass('redTokenBoard7 yellowTokenBoard7');
      }
   });

   $('div.token') && $('.fifthColumn').on('mousedown', function() {
      if ($('td.tokenChanger2').hasClass('redTokenBoard2') && $('div.f5').hasClass('tt')) {
         $getColor1.toggleClass('yellowTokenBoard1 redTokenBoard1');
         $getColor2.toggleClass('yellowTokenBoard2 redTokenBoard2');
         $getColor3.toggleClass('yellowTokenBoard3 redTokenBoard3');
         $getColor4.toggleClass('yellowTokenBoard4 redTokenBoard4');
         $getColor5.toggleClass('yellowTokenBoard5 redTokenBoard5');
         $getColor6.toggleClass('yellowTokenBoard6 redTokenBoard6');
         $getColor7.toggleClass('yellowTokenBoard7 redTokenBoard7');
      } else if ($('td.tokenChanger1').hasClass('yellowTokenBoard1') && $('div.f5').hasClass('tt')) {
         $getColor1.toggleClass('redTokenBoard1 yellowTokenBoard1');
         $getColor2.toggleClass('redTokenBoard2 yellowTokenBoard2');
         $getColor3.toggleClass('redTokenBoard3 yellowTokenBoard3');
         $getColor4.toggleClass('redTokenBoard4 yellowTokenBoard4');
         $getColor5.toggleClass('redTokenBoard5 yellowTokenBoard5');
         $getColor6.toggleClass('redTokenBoard6 yellowTokenBoard6');
         $getColor7.toggleClass('redTokenBoard7 yellowTokenBoard7');
      }
   });

   $('div.token') && $('.sixthColumn').on('mousedown', function() {
      if ($('td.tokenChanger2').hasClass('redTokenBoard2') && $('div.f6').hasClass('tt')) {
         $getColor1.toggleClass('yellowTokenBoard1 redTokenBoard1');
         $getColor2.toggleClass('yellowTokenBoard2 redTokenBoard2');
         $getColor3.toggleClass('yellowTokenBoard3 redTokenBoard3');
         $getColor4.toggleClass('yellowTokenBoard4 redTokenBoard4');
         $getColor5.toggleClass('yellowTokenBoard5 redTokenBoard5');
         $getColor6.toggleClass('yellowTokenBoard6 redTokenBoard6');
         $getColor7.toggleClass('yellowTokenBoard7 redTokenBoard7');
      } else if ($('td.tokenChanger1').hasClass('yellowTokenBoard1') && $('div.f6').hasClass('tt')) {
         $getColor1.toggleClass('redTokenBoard1 yellowTokenBoard1');
         $getColor2.toggleClass('redTokenBoard2 yellowTokenBoard2');
         $getColor3.toggleClass('redTokenBoard3 yellowTokenBoard3');
         $getColor4.toggleClass('redTokenBoard4 yellowTokenBoard4');
         $getColor5.toggleClass('redTokenBoard5 yellowTokenBoard5');
         $getColor6.toggleClass('redTokenBoard6 yellowTokenBoard6');
         $getColor7.toggleClass('redTokenBoard7 yellowTokenBoard7');
      }
   });

   $('div.token') && $('.seventhColumn').on('mousedown', function() {
      if ($('td.tokenChanger2').hasClass('redTokenBoard2') && $('div.f7').hasClass('tt')) {
         $getColor1.toggleClass('yellowTokenBoard1 redTokenBoard1');
         $getColor2.toggleClass('yellowTokenBoard2 redTokenBoard2');
         $getColor3.toggleClass('yellowTokenBoard3 redTokenBoard3');
         $getColor4.toggleClass('yellowTokenBoard4 redTokenBoard4');
         $getColor5.toggleClass('yellowTokenBoard5 redTokenBoard5');
         $getColor6.toggleClass('yellowTokenBoard6 redTokenBoard6');
         $getColor7.toggleClass('yellowTokenBoard7 redTokenBoard7');
      } else if ($('td.tokenChanger1').hasClass('yellowTokenBoard1') && $('div.f7').hasClass('tt')) {
         $getColor1.toggleClass('redTokenBoard1 yellowTokenBoard1');
         $getColor2.toggleClass('redTokenBoard2 yellowTokenBoard2');
         $getColor3.toggleClass('redTokenBoard3 yellowTokenBoard3');
         $getColor4.toggleClass('redTokenBoard4 yellowTokenBoard4');
         $getColor5.toggleClass('redTokenBoard5 yellowTokenBoard5');
         $getColor6.toggleClass('redTokenBoard6 yellowTokenBoard6');
         $getColor7.toggleClass('redTokenBoard7 yellowTokenBoard7');
      }
   });

});

const defaultHover = () => {
   $('.tokenChanger1').hide();
   $('.tokenChanger2').hide();
   $('.tokenChanger3').hide();
   $('.tokenChanger4').hide();
   $('.tokenChanger5').hide();
   $('.tokenChanger6').hide();
   $('.tokenChanger7').hide();
};

//Hovering the Tokens on the top of the Board


const tokenHovers = () => {

   $('.tokenChanger1').hide();
   $('.tokenChanger2').hide();
   $('.tokenChanger3').hide();
   $('.tokenChanger4').show();
   $('.tokenChanger5').hide();
   $('.tokenChanger6').hide();
   $('.tokenChanger7').hide();

   $('.firstColumn').hover( () => {
      $('.tokenChanger1').show();
      $('.tokenChanger2').hide();
      $('.tokenChanger3').hide();
      $('.tokenChanger4').hide();
      $('.tokenChanger5').hide();
      $('.tokenChanger6').hide();
      $('.tokenChanger7').hide();
   });

   $('.secondColumn').hover(function(){
      $('.tokenChanger1').hide();
      $('.tokenChanger2').show();
      $('.tokenChanger3').hide();
      $('.tokenChanger4').hide();
      $('.tokenChanger5').hide();
      $('.tokenChanger6').hide();
      $('.tokenChanger7').hide();
   });

   $('.thirdColumn').hover(function(){
      $('.tokenChanger1').hide();
      $('.tokenChanger2').hide();
      $('.tokenChanger3').show();
      $('.tokenChanger4').hide();
      $('.tokenChanger5').hide();
      $('.tokenChanger6').hide();
      $('.tokenChanger7').hide();
   });

   $('.fourthColumn').hover(function(){
      $('.tokenChanger1').hide();
      $('.tokenChanger2').hide();
      $('.tokenChanger3').hide();
      $('.tokenChanger4').show();
      $('.tokenChanger5').hide();
      $('.tokenChanger6').hide();
      $('.tokenChanger7').hide();
   });

   $('.fifthColumn').hover(function(){
      $('.tokenChanger1').hide();
      $('.tokenChanger2').hide();
      $('.tokenChanger3').hide();
      $('.tokenChanger4').hide();
      $('.tokenChanger5').show();
      $('.tokenChanger6').hide();
      $('.tokenChanger7').hide();
   });

   $('.sixthColumn').hover(function(){
      $('.tokenChanger1').hide();
      $('.tokenChanger2').hide();
      $('.tokenChanger3').hide();
      $('.tokenChanger4').hide();
      $('.tokenChanger5').hide();
      $('.tokenChanger6').show();
      $('.tokenChanger7').hide();
   });

   $('.seventhColumn').hover(function(){
      $('.tokenChanger1').hide();
      $('.tokenChanger2').hide();
      $('.tokenChanger3').hide();
      $('.tokenChanger4').hide();
      $('.tokenChanger5').hide();
      $('.tokenChanger6').hide();
      $('.tokenChanger7').show();
   });

};

//This function inserts the Tokens into the Board after clicking the #addButton2
let tokensInside = $('#addButton2').on('click', () => {

   $(function (selectingColor){

      /*
      This function toggles the hiddenToken Class from 'rt' to 'yt' and vice versa.
      */

      var $hiddenToken = $('.hiddenToken');

      $('div.token').on('mousedown', function() {
         if ($hiddenToken.hasClass('rt') && $('.tokenChanger1').hasClass('yellowTokenBoard1')) {
            $hiddenToken.toggleClass('yt rt');
         } else if ($hiddenToken.hasClass('yt') && $('.tokenChanger1').hasClass('redTokenBoard1')) {
            $hiddenToken.toggleClass('rt yt');
         }
      });

      /*
      This function checks if the Table Data has a Class 'tt' &&
      the Class of the 'hiddenToken'. Therefore, it adds either an 'rt' or 'yt' Class
      to the Table Data, and remove the 'tt' Class, so it won't be used again
      in each game.
      */

      $('.firstColumn').on('mousedown', function() {
         if ($('div.a1').hasClass('tt') && $('.hiddenToken').hasClass('rt')) {
            $('div.a1').addClass('yt');
            $('div.a1').removeClass('tt');
         } else if ($('div.a1').hasClass('tt') && $('.hiddenToken').hasClass('yt')) {
            $('div.a1').addClass('rt');
            $('div.a1').removeClass('tt')
         } else if ($('div.b1').hasClass('tt') && $('.hiddenToken').hasClass('rt')) {
            $('div.b1').addClass('yt');
            $('div.b1').removeClass('tt');
         } else if ($('div.b1').hasClass('tt') && $('.hiddenToken').hasClass('yt')) {
            $('div.b1').addClass('rt');
            $('div.b1').removeClass('tt')
         } else if ($('div.c1').hasClass('tt') && $('.hiddenToken').hasClass('rt')) {
            $('div.c1').addClass('yt');
            $('div.c1').removeClass('tt');
         } else if ($('div.c1').hasClass('tt') && $('.hiddenToken').hasClass('yt')) {
            $('div.c1').addClass('rt');
            $('div.c1').removeClass('tt')
         } else if ($('div.d1').hasClass('tt') && $('.hiddenToken').hasClass('rt')) {
            $('div.d1').addClass('yt');
            $('div.d1').removeClass('tt');
         } else if ($('div.d1').hasClass('tt') && $('.hiddenToken').hasClass('yt')) {
            $('div.d1').addClass('rt');
            $('div.d1').removeClass('tt')
         } else if ($('div.e1').hasClass('tt') && $('.hiddenToken').hasClass('rt')) {
            $('div.e1').addClass('yt');
            $('div.e1').removeClass('tt');
         } else if ($('div.e1').hasClass('tt') && $('.hiddenToken').hasClass('yt')) {
            $('div.e1').addClass('rt');
            $('div.e1').removeClass('tt')
         } else if ($('div.f1').hasClass('tt') && $('.hiddenToken').hasClass('rt')) {
            $('div.f1').addClass('yt');
            $('div.f1').removeClass('tt');
         } else if ($('div.f1').hasClass('tt') && $('.hiddenToken').hasClass('yt')) {
            $('div.f1').addClass('rt');
            $('div.f1').removeClass('tt')
         }
      });

      $('.secondColumn').on('mousedown', function() {
         if ($('div.a2').hasClass('tt') && $('.hiddenToken').hasClass('rt')) {
            $('div.a2').addClass('yt');
            $('div.a2').removeClass('tt');
         } else if ($('div.a2').hasClass('tt') && $('.hiddenToken').hasClass('yt')) {
            $('div.a2').addClass('rt');
            $('div.a2').removeClass('tt')
         } else if ($('div.b2').hasClass('tt') && $('.hiddenToken').hasClass('rt')) {
            $('div.b2').addClass('yt');
            $('div.b2').removeClass('tt');
         } else if ($('div.b2').hasClass('tt') && $('.hiddenToken').hasClass('yt')) {
            $('div.b2').addClass('rt');
            $('div.b2').removeClass('tt')
         } else if ($('div.c2').hasClass('tt') && $('.hiddenToken').hasClass('rt')) {
            $('div.c2').addClass('yt');
            $('div.c2').removeClass('tt');
         } else if ($('div.c2').hasClass('tt') && $('.hiddenToken').hasClass('yt')) {
            $('div.c2').addClass('rt');
            $('div.c2').removeClass('tt')
         } else if ($('div.d2').hasClass('tt') && $('.hiddenToken').hasClass('rt')) {
            $('div.d2').addClass('yt');
            $('div.d2').removeClass('tt');
         } else if ($('div.d2').hasClass('tt') && $('.hiddenToken').hasClass('yt')) {
            $('div.d2').addClass('rt');
            $('div.d2').removeClass('tt')
         } else if ($('div.e2').hasClass('tt') && $('.hiddenToken').hasClass('rt')) {
            $('div.e2').addClass('yt');
            $('div.e2').removeClass('tt');
         } else if ($('div.e2').hasClass('tt') && $('.hiddenToken').hasClass('yt')) {
            $('div.e2').addClass('rt');
            $('div.e2').removeClass('tt')
         } else if ($('div.f2').hasClass('tt') && $('.hiddenToken').hasClass('rt')) {
            $('div.f2').addClass('yt');
            $('div.f2').removeClass('tt');
         } else if ($('div.f2').hasClass('tt') && $('.hiddenToken').hasClass('yt')) {
            $('div.f2').addClass('rt');
            $('div.f2').removeClass('tt')
         }
      });

      $('.thirdColumn').on('mousedown', function() {
         if ($('div.a3').hasClass('tt') && $('.hiddenToken').hasClass('rt')) {
            $('div.a3').addClass('yt');
            $('div.a3').removeClass('tt');
         } else if ($('div.a3').hasClass('tt') && $('.hiddenToken').hasClass('yt')) {
            $('div.a3').addClass('rt');
            $('div.a3').removeClass('tt')
         } else if ($('div.b3').hasClass('tt') && $('.hiddenToken').hasClass('rt')) {
            $('div.b3').addClass('yt');
            $('div.b3').removeClass('tt');
         } else if ($('div.b3').hasClass('tt') && $('.hiddenToken').hasClass('yt')) {
            $('div.b3').addClass('rt');
            $('div.b3').removeClass('tt')
         } else if ($('div.c3').hasClass('tt') && $('.hiddenToken').hasClass('rt')) {
            $('div.c3').addClass('yt');
            $('div.c3').removeClass('tt');
         } else if ($('div.c3').hasClass('tt') && $('.hiddenToken').hasClass('yt')) {
            $('div.c3').addClass('rt');
            $('div.c3').removeClass('tt')
         } else if ($('div.d3').hasClass('tt') && $('.hiddenToken').hasClass('rt')) {
            $('div.d3').addClass('yt');
            $('div.d3').removeClass('tt');
         } else if ($('div.d3').hasClass('tt') && $('.hiddenToken').hasClass('yt')) {
            $('div.d3').addClass('rt');
            $('div.d3').removeClass('tt')
         } else if ($('div.e3').hasClass('tt') && $('.hiddenToken').hasClass('rt')) {
            $('div.e3').addClass('yt');
            $('div.e3').removeClass('tt');
         } else if ($('div.e3').hasClass('tt') && $('.hiddenToken').hasClass('yt')) {
            $('div.e3').addClass('rt');
            $('div.e3').removeClass('tt')
         } else if ($('div.f3').hasClass('tt') && $('.hiddenToken').hasClass('rt')) {
            $('div.f3').addClass('yt');
            $('div.f3').removeClass('tt');
         } else if ($('div.f3').hasClass('tt') && $('.hiddenToken').hasClass('yt')) {
            $('div.f3').addClass('rt');
            $('div.f3').removeClass('tt')
         }
      });

      $('.fourthColumn').on('mousedown', function() {
         if ($('div.a4').hasClass('tt') && $('.hiddenToken').hasClass('rt')) {
            $('div.a4').addClass('yt');
            $('div.a4').removeClass('tt');
         } else if ($('div.a4').hasClass('tt') && $('.hiddenToken').hasClass('yt')) {
            $('div.a4').addClass('rt');
            $('div.a4').removeClass('tt')
         } else if ($('div.b4').hasClass('tt') && $('.hiddenToken').hasClass('rt')) {
            $('div.b4').addClass('yt');
            $('div.b4').removeClass('tt');
         } else if ($('div.b4').hasClass('tt') && $('.hiddenToken').hasClass('yt')) {
            $('div.b4').addClass('rt');
            $('div.b4').removeClass('tt')
         } else if ($('div.c4').hasClass('tt') && $('.hiddenToken').hasClass('rt')) {
            $('div.c4').addClass('yt');
            $('div.c4').removeClass('tt');
         } else if ($('div.c4').hasClass('tt') && $('.hiddenToken').hasClass('yt')) {
            $('div.c4').addClass('rt');
            $('div.c4').removeClass('tt')
         } else if ($('div.d4').hasClass('tt') && $('.hiddenToken').hasClass('rt')) {
            $('div.d4').addClass('yt');
            $('div.d4').removeClass('tt');
         } else if ($('div.d4').hasClass('tt') && $('.hiddenToken').hasClass('yt')) {
            $('div.d4').addClass('rt');
            $('div.d4').removeClass('tt')
         } else if ($('div.e4').hasClass('tt') && $('.hiddenToken').hasClass('rt')) {
            $('div.e4').addClass('yt');
            $('div.e4').removeClass('tt');
         } else if ($('div.e4').hasClass('tt') && $('.hiddenToken').hasClass('yt')) {
            $('div.e4').addClass('rt');
            $('div.e4').removeClass('tt')
         } else if ($('div.f4').hasClass('tt') && $('.hiddenToken').hasClass('rt')) {
            $('div.f4').addClass('yt');
            $('div.f4').removeClass('tt');
         } else if ($('div.f4').hasClass('tt') && $('.hiddenToken').hasClass('yt')) {
            $('div.f4').addClass('rt');
            $('div.f4').removeClass('tt')
         }
      });

      $('.fifthColumn').on('mousedown', function() {
         if ($('div.a5').hasClass('tt') && $('.hiddenToken').hasClass('rt')) {
            $('div.a5').addClass('yt');
            $('div.a5').removeClass('tt');
         } else if ($('div.a5').hasClass('tt') && $('.hiddenToken').hasClass('yt')) {
            $('div.a5').addClass('rt');
            $('div.a5').removeClass('tt')
         } else if ($('div.b5').hasClass('tt') && $('.hiddenToken').hasClass('rt')) {
            $('div.b5').addClass('yt');
            $('div.b5').removeClass('tt');
         } else if ($('div.b5').hasClass('tt') && $('.hiddenToken').hasClass('yt')) {
            $('div.b5').addClass('rt');
            $('div.b5').removeClass('tt')
         } else if ($('div.c5').hasClass('tt') && $('.hiddenToken').hasClass('rt')) {
            $('div.c5').addClass('yt');
            $('div.c5').removeClass('tt');
         } else if ($('div.c5').hasClass('tt') && $('.hiddenToken').hasClass('yt')) {
            $('div.c5').addClass('rt');
            $('div.c5').removeClass('tt')
         } else if ($('div.d5').hasClass('tt') && $('.hiddenToken').hasClass('rt')) {
            $('div.d5').addClass('yt');
            $('div.d5').removeClass('tt');
         } else if ($('div.d5').hasClass('tt') && $('.hiddenToken').hasClass('yt')) {
            $('div.d5').addClass('rt');
            $('div.d5').removeClass('tt')
         } else if ($('div.e5').hasClass('tt') && $('.hiddenToken').hasClass('rt')) {
            $('div.e5').addClass('yt');
            $('div.e5').removeClass('tt');
         } else if ($('div.e5').hasClass('tt') && $('.hiddenToken').hasClass('yt')) {
            $('div.e5').addClass('rt');
            $('div.e5').removeClass('tt')
         } else if ($('div.f5').hasClass('tt') && $('.hiddenToken').hasClass('rt')) {
            $('div.f5').addClass('yt');
            $('div.f5').removeClass('tt');
         } else if ($('div.f5').hasClass('tt') && $('.hiddenToken').hasClass('yt')) {
            $('div.f5').addClass('rt');
            $('div.f5').removeClass('tt')
         }
      });

      $('.sixthColumn').on('mousedown', function() {
         if ($('div.a6').hasClass('tt') && $('.hiddenToken').hasClass('rt')) {
            $('div.a6').addClass('yt');
            $('div.a6').removeClass('tt');
         } else if ($('div.a6').hasClass('tt') && $('.hiddenToken').hasClass('yt')) {
            $('div.a6').addClass('rt');
            $('div.a6').removeClass('tt')
         } else if ($('div.b6').hasClass('tt') && $('.hiddenToken').hasClass('rt')) {
            $('div.b6').addClass('yt');
            $('div.b6').removeClass('tt');
         } else if ($('div.b6').hasClass('tt') && $('.hiddenToken').hasClass('yt')) {
            $('div.b6').addClass('rt');
            $('div.b6').removeClass('tt')
         } else if ($('div.c6').hasClass('tt') && $('.hiddenToken').hasClass('rt')) {
            $('div.c6').addClass('yt');
            $('div.c6').removeClass('tt');
         } else if ($('div.c6').hasClass('tt') && $('.hiddenToken').hasClass('yt')) {
            $('div.c6').addClass('rt');
            $('div.c6').removeClass('tt')
         } else if ($('div.d6').hasClass('tt') && $('.hiddenToken').hasClass('rt')) {
            $('div.d6').addClass('yt');
            $('div.d6').removeClass('tt');
         } else if ($('div.d6').hasClass('tt') && $('.hiddenToken').hasClass('yt')) {
            $('div.d6').addClass('rt');
            $('div.d6').removeClass('tt')
         } else if ($('div.e6').hasClass('tt') && $('.hiddenToken').hasClass('rt')) {
            $('div.e6').addClass('yt');
            $('div.e6').removeClass('tt');
         } else if ($('div.e6').hasClass('tt') && $('.hiddenToken').hasClass('yt')) {
            $('div.e6').addClass('rt');
            $('div.e6').removeClass('tt')
         } else if ($('div.f6').hasClass('tt') && $('.hiddenToken').hasClass('rt')) {
            $('div.f6').addClass('yt');
            $('div.f6').removeClass('tt');
         } else if ($('div.f6').hasClass('tt') && $('.hiddenToken').hasClass('yt')) {
            $('div.f6').addClass('rt');
            $('div.f6').removeClass('tt')
         }
      });

      $('.seventhColumn').on('mousedown', function() {
         if ($('div.a7').hasClass('tt') && $('.hiddenToken').hasClass('rt')) {
            $('div.a7').addClass('yt');
            $('div.a7').removeClass('tt');
         } else if ($('div.a7').hasClass('tt') && $('.hiddenToken').hasClass('yt')) {
            $('div.a7').addClass('rt');
            $('div.a7').removeClass('tt')
         } else if ($('div.b7').hasClass('tt') && $('.hiddenToken').hasClass('rt')) {
            $('div.b7').addClass('yt');
            $('div.b7').removeClass('tt');
         } else if ($('div.b7').hasClass('tt') && $('.hiddenToken').hasClass('yt')) {
            $('div.b7').addClass('rt');
            $('div.b7').removeClass('tt')
         } else if ($('div.c7').hasClass('tt') && $('.hiddenToken').hasClass('rt')) {
            $('div.c7').addClass('yt');
            $('div.c7').removeClass('tt');
         } else if ($('div.c7').hasClass('tt') && $('.hiddenToken').hasClass('yt')) {
            $('div.c7').addClass('rt');
            $('div.c7').removeClass('tt')
         } else if ($('div.d7').hasClass('tt') && $('.hiddenToken').hasClass('rt')) {
            $('div.d7').addClass('yt');
            $('div.d7').removeClass('tt');
         } else if ($('div.d7').hasClass('tt') && $('.hiddenToken').hasClass('yt')) {
            $('div.d7').addClass('rt');
            $('div.d7').removeClass('tt')
         } else if ($('div.e7').hasClass('tt') && $('.hiddenToken').hasClass('rt')) {
            $('div.e7').addClass('yt');
            $('div.e7').removeClass('tt');
         } else if ($('div.e7').hasClass('tt') && $('.hiddenToken').hasClass('yt')) {
            $('div.e7').addClass('rt');
            $('div.e7').removeClass('tt')
         } else if ($('div.f7').hasClass('tt') && $('.hiddenToken').hasClass('rt')) {
            $('div.f7').addClass('yt');
            $('div.f7').removeClass('tt');
         } else if ($('div.f7').hasClass('tt') && $('.hiddenToken').hasClass('yt')) {
            $('div.f7').addClass('rt');
            $('div.f7').removeClass('tt')
         }
      });

   });

});
// Chosing the winner

const winnerLines = [
   ['f1', 'f2', 'f3', 'f4'], ['f2', 'f3', 'f4', 'f5'],
   ['f3', 'f4', 'f5', 'f6'], ['f4', 'f5', 'f6', 'f7'],
   ['e1', 'e2', 'e3', 'e4'], ['e2', 'e3', 'e4', 'e5'],
   ['e3', 'e4', 'e5', 'e6'], ['e4', 'e5', 'e6', 'e7'],
   ['d1', 'd2', 'd3', 'd4'], ['d2', 'd3', 'd4', 'd5'],
   ['d3', 'd4', 'd5', 'd6'], ['d4', 'd5', 'd6', 'd7'],
   ['c1', 'c2', 'c3', 'c4'], ['c2', 'c3', 'c4', 'c5'],
   ['c3', 'c4', 'c5', 'c6'], ['c4', 'c5', 'c6', 'c7'],
   ['b1', 'b2', 'b3', 'b4'], ['b2', 'b3', 'b4', 'b5'],
   ['b3', 'b4', 'b5', 'b6'], ['b4', 'b5', 'b6', 'b7'],
   ['a1', 'a2', 'a3', 'a4'], ['a2', 'a3', 'a4', 'a5'],
   ['a3', 'a4', 'a5', 'a6'], ['a4', 'a5', 'a6', 'a7'],
   ['a1', 'b1', 'c1', 'd1'], ['b1', 'c1', 'd1', 'e1'], ['c1', 'd1', 'e1', 'f1'],
   ['a2', 'b2', 'c2', 'd2'], ['b2', 'c2', 'd2', 'e2'], ['c2', 'd2', 'e2', 'f2'],
   ['a3', 'b3', 'c3', 'd3'], ['b3', 'c3', 'd3', 'e3'], ['c3', 'd3', 'e3', 'f3'],
   ['a4', 'b4', 'c4', 'd4'], ['b4', 'c4', 'd4', 'e4'], ['c4', 'd4', 'e4', 'f4'],
   ['a5', 'b5', 'c5', 'd5'], ['b5', 'c5', 'd5', 'e5'], ['c5', 'd5', 'e5', 'f5'],
   ['a6', 'b6', 'c6', 'd6'], ['b6', 'c6', 'd6', 'e6'], ['c6', 'd6', 'e6', 'f6'],
   ['a7', 'b7', 'c7', 'd7'], ['b7', 'c7', 'd7', 'e7'], ['c7', 'd7', 'e7', 'f7'],
   ['c1', 'd2', 'e3', 'f4'], ['b1', 'c2', 'd3', 'e4'], ['c2', 'd3', 'e4', 'f5'],
   ['a1', 'b2', 'c3', 'd4'], ['b2', 'c3', 'd4', 'e5'], ['c3', 'd4', 'e5', 'f6'],
   ['a2', 'b3', 'c4', 'd5'], ['b3', 'c4', 'd5', 'e6'], ['c4', 'd5', 'e6', 'f7'],
   ['a3', 'b4', 'c5', 'd6'], ['b4', 'c5', 'd6', 'e7'], ['a4', 'b5', 'c6', 'd7'],
   ['f4', 'e5', 'd6', 'c7'], ['f3', 'e4', 'd5', 'c6'], ['e4', 'd5', 'c6', 'b7'],
   ['f2', 'e3', 'd4', 'c5'], ['e3', 'd4', 'c5', 'b6'], ['d4', 'c5', 'b6', 'a7'],
   ['f1', 'e2', 'd3', 'c4'], ['e2', 'd3', 'c4', 'b5'], ['d3', 'c4', 'b5', 'a6'],
   ['e1', 'd2', 'c3', 'b4'], ['d2', 'c3', 'b4', 'a5'], ['d1', 'c2', 'b3', 'a4']
];

let redWinner = 0;
let yellowWinner = 0;

const theWinner = $('.token').on('mouseup', () => {

   let $playerOne = $('.newPlayer1').html();
   let $playerTwo = $('.newPlayer2').html();

   //The forEach function loops in all the winnerLines array
   let winnerLoop = winnerLines.forEach(tokens => {

      //The every function loops in every individual array inside the winnerLines array
      let fourRedTokens = tokens.every(eachToken => $('.' + eachToken).hasClass('rt'));
      let fourYellowTokens = tokens.every(eachToken => $('.' + eachToken).hasClass('yt'));

      /* When the fourRedTokens or the fourYellowTokens returns true,
      it will give to all the .rt and the .yt Class a lessOpacity Class and remove
      the lessOpacity Class to the Winner Array. As well, it adds 1 point to
      either the scorePlayer1 or the scorePlayer2 */
      if (fourRedTokens) {

         $('.rt').addClass('lessOpacity');
         $('.yt').addClass('lessOpacity');
         tokens.forEach(eachToken => {
            $('.' + eachToken).removeClass('lessOpacity');
         });
         redWinner += 1;
         $('#scorePlayer1').html(redWinner);
         $('#playAgain').addClass('playAgainPopUp');
         $('#playerMessage').html(`${$playerOne} won`);
         defaultHover();

      } else if (fourYellowTokens) {

         $('.rt').addClass('lessOpacity');
         $('.yt').addClass('lessOpacity');
         tokens.forEach(eachToken => {
            $('.' + eachToken).removeClass('lessOpacity');
         });
         yellowWinner += 1;
         $('#scorePlayer2').html(yellowWinner);
         $('#playAgain').addClass('playAgainPopUp');
         $('#playerMessage').html(`${$playerTwo} won`);
         defaultHover();

      }
   });
});

// This function restart the game so the same Players can continue playing

$('#play').on('click', () => {
   $('.token').addClass('tt');
   $('.token').removeClass('rt').removeClass('lessOpacity');
   $('.token').removeClass('yt').removeClass('lessOpacity');
   $('#playAgain').removeClass('playAgainPopUp');
   tokenHovers();
});

defaultHover();
