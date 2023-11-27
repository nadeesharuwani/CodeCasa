const hr=document.getElementById("hour");
const min=document.getElementById("min");
const sec=document.getElementById("sec");

function displayTime() {

  let date = new Date();

  //get the hour,minute,second
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();

  //rotate
  let hRotate = 30 * hh + mm / 2;
  let mRotate = 6 * mm;
  let sRotate = 6 * ss;

  hr.style.transform= `rotate(${hRotate}deg)`;
  min.style.transform= `rotate(${mRotate}deg)`;
  sec.style.transform= `rotate(${sRotate}deg)`;
}

setInterval(displayTime,  1000);