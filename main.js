'use strict';
const timer = document.getElementById("timer");
const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");
let timeElapsed = 0;  //スタート押してからの経過時間
let intervalId = null; //setIntervalの戻り値

function updateTime() {
  const ms = (timeElapsed % 1000) ;
  const s = Math.floor((timeElapsed / 1000)) % 60;
  const minute = Math.floor(timeElapsed / (1000*60)) % 60;
  const hour = Math.floor(timeElapsed / (1000*60*60));
  
  //数値を文字列に
const msStr = ms.toString();
const sStr = s.toString();
const minuteStr = minute.toString();
const hourStr = hour.toString();
timer.innerHTML =`${hourStr} : ${minuteStr} : ${sStr} : ${msStr}`;
}

//スタート押したときの処理
start.addEventListener("click", function() {
  start.disabled = true; //二度押し防止
  let previousTime = new Date();//スタートを押した時刻  
  intervalId = setInterval(function(){
    const now = new Date(); //現在の時刻を取得
    timeElapsed += now -  previousTime;      //経過時間に加える  
    previousTime = now                     
    updateTime();
  }, 10);
});

//ストップ
stop.addEventListener("click", function () {
  clearInterval(intervalId);
  start.disabled = false;  //btn不活性化を解除
})

//リセット
reset.addEventListener("click", function () {
  timeElapsed = 0;
  updateTime();
  timer.innerHTML =`0 : 0 : 0 :000`;
})















