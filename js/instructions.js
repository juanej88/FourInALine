
//Players' names and Reset Button

$(function () {

   const $startButton = $('#startButton');
   const $player1Info = $('#player1Info');
   const $smallRedToken = $('#smallRedToken')
   const $player2Info = $('#player2Info');
   const $smallYellowToken = $('#smallYellowToken')
   const $resetGame = $('#resetGame');
   const $playAgain = $('#playAgain');

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
      let newPlayerName1 = $('div.redToken').next();
      newPlayerName1.addClass('newPlayer1');
      let newPlayerName2 = $('div.yellowToken').next();
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

   /*
   This function toggles the hiddenToken Class from 'rt' to 'yt' and vice versa.
   */

   let $hiddenToken = $('.hiddenToken');

   $('div.token').on('mousedown', () => {
      if ($hiddenToken.hasClass('rt') && $('.tokenChanger1').hasClass('yellowTokenBoard1')) {
         $hiddenToken.toggleClass('yt rt');
      } else if ($hiddenToken.hasClass('yt') && $('.tokenChanger1').hasClass('redTokenBoard1')) {
         $hiddenToken.toggleClass('rt yt');
      }
   });

   /*
   This function checks which Table Data has a Class 'tt' to add
   the Class of the current 'hiddenToken', either 'rt' or 'yt'.
   It also removes the 'tt' Class when giving a class 'rt' or 'yt',
   so it won't be used again in each game.
   */

   $('.firstColumn').on('mousedown', () => {
      for (let i = 1; i <= 6; i++) {
         if ($(`div.firstRow${i}`).hasClass('tt') && $('.hiddenToken').hasClass('rt')) {
            $(`div.firstRow${i}`).addClass('yt');
            $(`div.firstRow${i}`).removeClass('tt');
            break;
         } else if ($(`div.firstRow${i}`).hasClass('tt') && $('.hiddenToken').hasClass('yt')) {
            $(`div.firstRow${i}`).addClass('rt');
            $(`div.firstRow${i}`).removeClass('tt');
            break;
         }
      };
   });

   $('.secondColumn').on('mousedown', () => {
      for (let i = 1; i <= 6; i++) {
         if ($(`div.secondRow${i}`).hasClass('tt') && $('.hiddenToken').hasClass('rt')) {
            $(`div.secondRow${i}`).addClass('yt');
            $(`div.secondRow${i}`).removeClass('tt');
            break;
         } else if ($(`div.secondRow${i}`).hasClass('tt') && $('.hiddenToken').hasClass('yt')) {
            $(`div.secondRow${i}`).addClass('rt');
            $(`div.secondRow${i}`).removeClass('tt');
            break;
         }
      };
   });

   $('.thirdColumn').on('mousedown', () => {
      for (let i = 1; i <= 6; i++) {
         if ($(`div.thirdRow${i}`).hasClass('tt') && $('.hiddenToken').hasClass('rt')) {
            $(`div.thirdRow${i}`).addClass('yt');
            $(`div.thirdRow${i}`).removeClass('tt');
            break;
         } else if ($(`div.thirdRow${i}`).hasClass('tt') && $('.hiddenToken').hasClass('yt')) {
            $(`div.thirdRow${i}`).addClass('rt');
            $(`div.thirdRow${i}`).removeClass('tt');
            break;
         }
      };
   });

   $('.fourthColumn').on('mousedown', () => {
      for (let i = 1; i <= 6; i++) {
         if ($(`div.fourthRow${i}`).hasClass('tt') && $('.hiddenToken').hasClass('rt')) {
            $(`div.fourthRow${i}`).addClass('yt');
            $(`div.fourthRow${i}`).removeClass('tt');
            break;
         } else if ($(`div.fourthRow${i}`).hasClass('tt') && $('.hiddenToken').hasClass('yt')) {
            $(`div.fourthRow${i}`).addClass('rt');
            $(`div.fourthRow${i}`).removeClass('tt');
            break;
         }
      };
   });

   $('.fifthColumn').on('mousedown', () => {
      for (let i = 1; i <= 6; i++) {
         if ($(`div.fifthRow${i}`).hasClass('tt') && $('.hiddenToken').hasClass('rt')) {
            $(`div.fifthRow${i}`).addClass('yt');
            $(`div.fifthRow${i}`).removeClass('tt');
            break;
         } else if ($(`div.fifthRow${i}`).hasClass('tt') && $('.hiddenToken').hasClass('yt')) {
            $(`div.fifthRow${i}`).addClass('rt');
            $(`div.fifthRow${i}`).removeClass('tt');
            break;
         }
      };
   });

   $('.sixthColumn').on('mousedown', () => {
      for (let i = 1; i <= 6; i++) {
         if ($(`div.sixthRow${i}`).hasClass('tt') && $('.hiddenToken').hasClass('rt')) {
            $(`div.sixthRow${i}`).addClass('yt');
            $(`div.sixthRow${i}`).removeClass('tt');
            break;
         } else if ($(`div.sixthRow${i}`).hasClass('tt') && $('.hiddenToken').hasClass('yt')) {
            $(`div.sixthRow${i}`).addClass('rt');
            $(`div.sixthRow${i}`).removeClass('tt');
            break;
         }
      };
   });

   $('.seventhColumn').on('mousedown', () => {
      for (let i = 1; i <= 6; i++) {
         if ($(`div.seventhRow${i}`).hasClass('tt') && $('.hiddenToken').hasClass('rt')) {
            $(`div.seventhRow${i}`).addClass('yt');
            $(`div.seventhRow${i}`).removeClass('tt');
            break;
         } else if ($(`div.seventhRow${i}`).hasClass('tt') && $('.hiddenToken').hasClass('yt')) {
            $(`div.seventhRow${i}`).addClass('rt');
            $(`div.seventhRow${i}`).removeClass('tt');
            break;
         }
      };
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
