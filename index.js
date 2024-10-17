var isStop = true;
var second = 0;
var minutes = 0;
var hour = 0;

function start(){
  if(isStop == true){
    isStop = false;
    timer();
  }
}

function timer(){
  if(isStop == false){

    second = parseInt(second);
    minutes = parseInt(minutes);
    hour = parseInt(hour);

    second++;
    if(second == 60){
      second = 0;
      minutes++;
    }
    if(second<10){
      second = "0" + second;
    }
   
    if(minutes<10){
      minutes = "0" + minutes;
    }
    if(hour<10){
      hour = "0" + hour;
    }
    if(minutes == 60){
      minutes = 0;
      hour++;
    }
    
    }
    run.innerHTML = hour + " : " + minutes + " : " + second; 
    timerInterval = setTimeout("timer()", 1000);
  }

function stop(){
  isStop = true;
  clearTimeout(timerInterval);
}

function reset(){
  instop = true;
  clearTimeout(timerInterval);
  second = 0;
  minutes = 0;
  hour = 0;

  run.innerHTML = " 00 : 00 : 00";
}