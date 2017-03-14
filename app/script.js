$(document).ready(function(){
  var nr = #num;
  var bNr = #breakNum;
  var br = breaking;
  var tm = timing;
  var count = parseInt($("nr").html());
  var c = count;
  var breakTime = parseInt($("bNr").html());
  var bT = breakTime;
  console.log(count);
  
  $("#reset").hide();
  
  $("#start").click(function(){
    var counter = setInterval(timer, 1000);
    c *= 60;
    bT *= 60;

    function timer(){
        $('#start, #minus1, #plus1, "bNr", #minus1Break, #plus1Break, #top1').hide();
        $('tm').html("Session Time:");
        c -= 1;
        if (c === 0){
            clearInterval(counter);
            var startBreak=setInterval(breakTimer, 1000);
            $('nr, tm').hide();
        }
        if (c % 60 >= 10){
            $('nr').html(Math.floor(c / 60) + ":" + c % 60);
        }else{
            $('nr').html(Math.floor(c / 60) + ":" + "0" + c % 60);

        }
        
    
    function breakTimer(){
       
      $('br').html("Break Time:");
      $('bNr, br').show();
      
      bT -= 1;
      if (bT === 0){
          clearInterval(startBreak);
          $('bNr, br').hide();
          $('#reset').show();
      }
      if (bT % 60 >= 10){
            $('bNr').html(Math.floor(bT / 60) + ":" + bT % 60);
        }else{
            $('bNr').html(Math.floor(bT / 60) + ":" + "0" + bT % 60);
             }
      }
    }
});

$('#reset').click(function(){
    c = 15;
    bT = 5;
    $('#reset').hide();
    $('nr').html(c);
    $('bNr').html(bT);
    $('#start, nr, #minus1, #plus1, bNr, #minus1Break, #plus1Break, #top1').show();
    
});

  
  $("#minus1").click(function(){
      if (count > 1){
    count -= 1;
    $('nr').html(count);
    console.log(count);
      }
  });
  $("#plus1").click(function(){
    count += 1;
    $('nr').html(count);
    console.log(count);
  });
  $("#minus1Break").click(function(){
      if(breakTime > 1){
    breakTime -= 1;
    $('bNr').html(breakTime);
    console.log(breakTime);
      }
  });
  $("#plus1Break").click(function(){
    breakTime += 1;
    $('bNr').html(breakTime);
    console.log(breakTime);
  });
  
  
});