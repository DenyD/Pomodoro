$(document).ready(function(){
  var counters = {
      time: parseInt($("#num").html()),
      break: parseInt($("#breakNum").html())
  }
  var startButton = $("#start");
  var resetButton =  $("#reset");
  var sessionTime = $('#timing');
  var sessionValue = $('#num');
  var breakTime = $('#breaking');
  var breakValue = $('#breakNum');

  resetButton.hide();

  startButton.click(function(){
      var counter= setInterval(timer, 1000);
      counters.time *= 60;
      counters.break *= 60;

      function timer(){
          $('#start, #minus1, #plus1, #breakNum, #minus1Break, #plus1Break, #top1').hide();
          sessionTime.html("Session Time:");
          counters.time -=1;
          if (counters.time === 0){
              clearInterval(counter);
              var startBreak = setInterval(breakTimer, 1000);
              sessionValue.hide();
              sessionTime.hide();
          }
          if (counters.time % 60 >= 10){
              sessionValue.html(Math.floor(counters.time / 60) + ":" + counters.time % 60);
          }else{
              sessionValue.html(Math.floor(counters.time / 60) + ":" + "0" + counters.time % 60);

          }


          function breakTimer(){

          breakTime.html("Break Time:");
          breakValue.show();
          breakTime.show();

          counters.break -= 1;
          if (counters.break === 0){
              clearInterval(startBreak);
              breakValue.hide();
              breakTime.hide();
              resetButton.show();
          }
          if (counters.break % 60 >= 10){
                  breakValue.html(Math.floor(counters.break / 60) + ":" + counters.break % 60);
              }else{
                  breakValue.html(Math.floor(counters.break / 60) + ":" + "0" + counters.break % 60);
                  }
          }
      }
  });

  resetButton.click(function(){
        counters.time = 15;
        counters.break = 5;
        sessionValue.html(counters.time);
        breakValue.html(counters.break);
        resetButton.hide();
        $('#start, #num, #minus1, #plus1, #breakNum, #minus1Break, #plus1Break, #top1').show();

  });

  $("#minus1").click(function() {
      handleClick('time', sessionValue, false);
  });

  $("#plus1").click(function() {
    handleClick('time', sessionValue, true);
  });

  $("#minus1Break").click(function(){
    handleClick('break', breakValue, false);
  });

  $("#plus1Break").click(function() {
    handleClick('break', breakValue, true);
  });


  function handleClick(counter, element, isAddition) {
      if (!isAddition) {
          if (counters[counter] > 1) {
              counters[counter] -= 1;
          }
      } else {
          counters[counter] += 1;
      }
      $(element).html(counters[counter]);
  }

});