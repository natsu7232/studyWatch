const STOP_WATCH = document.getElementById('stop_watch');
const START = document.getElementById('start');
const CLEAR = document.getElementById('end');
const MESSAGE = document.getElementById('message');

let minutes = 0;    
let seconds = 0;
let value = "stop";    

let interval;  
let start = [];
let i = 0;
let rest = [];
let x = 0;

function set(num) {
    var ret;
    if( num < 10 ) { ret = "0" + num; }
    else { ret = num; }
    return ret;

}   

// let stopWatch = () => {
//     seconds++;  
//     if (seconds % 60 === 0) {   
//         minutes++;  
//         seconds = 0;    
//     }
//     STOP_WATCH.innerHTML = ('00' + minutes).slice(-2) + ':' + ('00' + seconds).slice(-2);
// }
  

START.addEventListener('click' , () => {
if(value == "stop"){
    // interval = setInterval(stopWatch, 1000);  
    let now = new Date();
    let record = "<p>" + set(now.getHours()) + ":" + set(now.getMinutes()) + ":" + set(now.getSeconds()) + "</P>";
    start[i] = record;
    var starts = start.join('<br>');
    console.log(starts);
    document.getElementById("startTimeDisp").innerHTML = starts;
    START.innerHTML = "REST";
    value = "start";
    MESSAGE.innerHTML = "勉強中...";
    document.body.style.backgroundColor = '#87CEFA';
    i++;
} else {
    // clearInterval(interval);
    let now = new Date();
    let record = "<p>" + set(now.getHours()) + ":" + set(now.getMinutes()) + ":" + set(now.getSeconds()) + "</P>";
    rest[x] = record;
    var rests = rest.join('<br>');
    console.log(rests);
    document.getElementById("restTimeDisp").innerHTML = rests;
    START.innerHTML = "START";
    value = "stop";
    MESSAGE.innerHTML = "休憩中...";
    document.body.style.backgroundColor = '#AEFFBD';
    x++;
    }
    
})




CLEAR.addEventListener('click' , () => {
    // clearInterval(interval);
    MESSAGE.innerHTML = "お疲れ様でした";
    document.body.style.backgroundColor = '#FFB6C1';
})

