$(document).ready(function(){
  var count = parseInt($("#num").html());
  var breakTime = parseInt($("#breakNum").html());
  console.log(count);
  
  $("#reset").hide();
  
$("#start").click(function(){
    var counter= setInterval(timer,1000);
    count*=60;
    breakTime*=60;

    function timer(){
        $('#start, #minus1, #plus1, #breakNum, #minus1Break, #plus1Break, #top1').hide();
        $('#timing').html("Session Time:");
        count-=1;
        if (count===0){
            clearInterval(counter);
            var startBreak=setInterval(breakTimer,1000);
            $('#num').hide();
            $('#timing').hide();
        }
        if (count%60>=10){
            $('#num').html(Math.floor(count/60)+":"+count%60);
        }else{
            $('#num').html(Math.floor(count/60)+":"+"0"+count%60);

        }
        
    
    function breakTimer(){
       
      $('#breaking').html("Break Time:");
      $('#breakNum, #breaking').show();
      
      breakTime-=1;
      if (breakTime===0){
          clearInterval(startBreak);
          $('#breakNum').hide();
          $('#breaking').hide();
          $('#reset').show();
      }
      if (breakTime%60>=10){
            $('#breakNum').html(Math.floor(breakTime/60)+":"+breakTime%60);
        }else{
            $('#breakNum').html(Math.floor(breakTime/60)+":"+"0"+breakTime%60);
 }
}
    }
});

$('#reset').click(function(){
    count=15;
    breakTime=5;
    $('#reset').hide();
    $('#num').html(count);
    $('#breakNum').html(breakTime);
    $('#start, #num, #minus1, #plus1, #breakNum, #minus1Break, #plus1Break, #top1').show();
    
});

  
  $("#minus1").click(function(){
      if (count>1){
    count-=1;
    $('#num').html(count);
    console.log(count);
      }
    });
  $("#plus1").click(function(){
    count+=1;
    $('#num').html(count);
    console.log(count);
    });
  $("#minus1Break").click(function(){
      if(breakTime>1){
    breakTime-=1;
    $('#breakNum').html(breakTime);
    console.log(breakTime);
      }
    });
  $("#plus1Break").click(function(){
    breakTime+=1;
    $('#breakNum').html(breakTime);
    console.log(breakTime);
  });
  
  
});