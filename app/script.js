$(document).ready(function(){
  var timeCount = parseInt($("#num").html());
  var breakTimeCount = parseInt($("#breakNum").html());
  var startButton = $("#start");
  var resetButton =  $("#reset");
  var sessionTime = $('#timing');
  var sessionValue = $('#num');
  var breakTime = $('#break');
  var breakValue = $('#breakNum');
  
  console.log(timeCount);
  
  resetButton.hide();
  
  startButton.click(function(){
      var counter= setInterval(timer, 1000);
      timeCount *= 60;
      breakTimeCount *= 60;

      function timer(){
          $('#start, #minus1, #plus1, #breakNum, #minus1Break, #plus1Break, #top1').hide();
          sessionTime.html("Session Time:");
          timeCount -=1;
          if (timeCount === 0){
              clearInterval(counter);
              var startBreak = setInterval(breakTimer, 1000);
              sessionValue.hide();
              sessionTime.hide();
          }
          if (timeCount % 60 >= 10){
              sessionValue.html(Math.floor(timeCount / 60) + ":" + timeCount % 60);
          }else{
              sessionValue.html(Math.floor(timeCount / 60) + ":" + "0" + timeCount % 60);

          }
            
        
          function breakTimer(){
            
          breakTime.html("Break Time:");
          breakValue.show();
          breakTime.show();
            
          breakTimeCount -= 1;
          if (breakTimeCount === 0){
              clearInterval(startBreak);
              breakValue.hide();
              breakTime.hide();
              resetButton.show();
          }
          if (breakTimeCount % 60 >= 10){
                  breakValue.html(Math.floor(breakTimeCount / 60) + ":" + breakTimeCount % 60);
              }else{
                  breakValue.html(Math.floor(breakTimeCount / 60) + ":" + "0" + breakTimeCount % 60);
                  }
          }
      }
  });

  resetButton.click(function(){
        timeCount = 15;
        breakTimeCount = 5;
        sessionValue.html(timeCount);
        breakValue.html(breakTimeCount);
        resetButton.hide();      
        $('#start, #num, #minus1, #plus1, #breakNum, #minus1Break, #plus1Break, #top1').show();
             
  });

  $("#minus1").click(function() {
      handleClick(timeCount, sessionValue, false);
  });

  $("#plus1").click(function() {
    handleClick(timeCount, sessionValue, true);
  });

  $("#minus1Break").click(function(){
    handleClick(breakTimeCount, breakValue, false);
  });

  $("#plus1Break").click(function() {
    handleClick(breakTimeCount, breakValue, true);
  });
  
  
  function handleClick(variable, element, isAddition) {
      if (!isAddition) {
          if (variable > 1) {
              variable -= 1;
          }
      } else {
          variable += 1;
      }
      $(element).html(variable);
  }
  
});