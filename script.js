const wrapper = document.querySelectorAll(".wrapper");

let pressed = false;
let startX = 0;

wrapper.addEventListener('mousedown', function (e) {
  pressed = true;
  startX = e.clientX;
  this.style.cursor = 'grabbing';
})

wrapper.addEventListener('mouseleave', function (e) {
  pressed = false;
})

window.addEventListener('mouseup', function (e) {
  pressed = false;
  wrapper.style.cursor = 'grab';
})

wrapper.addEventListener('mousemove', function (e) {
  if(!pressed) {
    return;
  }

  this.scrollLeft += startX - e.clientX;
})






function openAVAL(){
	wrapper1.style.transform="translateX(0)";
	wrapper2.style.transform=" translateX(300%)";
  wrapper3.style.transform="translateX(300%)";
  wrapper4.style.transform="translateX(300%)";
  wrapper5.style.transform="translateX(300%)";
  wrapper6.style.transform="translateX(300%)";

}

function openDOVOM(){
	wrapper1.style.transform=" translateX(300%)";
	wrapper2.style.transform="translateX(0)";
  wrapper3.style.transform="translateX(300%)";
  wrapper4.style.transform="translateX(300%)";
  wrapper5.style.transform="translateX(300%)";
  wrapper6.style.transform="translateX(300%)";
}

function openSEVOM(){
  wrapper1.style.transform=" translateX(300%)";
  wrapper2.style.transform=" translateX(300%)";
  wrapper3.style.transform="translateX(0)";
  wrapper4.style.transform="translateX(300%)";
  wrapper5.style.transform="translateX(300%)";
  wrapper6.style.transform="translateX(300%)";
}
function openCHAROM(){
  wrapper1.style.transform=" translateX(300%)";
  wrapper2.style.transform=" translateX(300%)";
  wrapper3.style.transform="translateX(300%)";
  wrapper4.style.transform="translateX(0)";
  wrapper5.style.transform="translateX(300%)";
  wrapper6.style.transform="translateX(300%)";
}
function openPANJOM(){
  wrapper1.style.transform=" translateX(300%)";
  wrapper2.style.transform=" translateX(300%)";
  wrapper3.style.transform="translateX(300%)";
  wrapper4.style.transform="translateX(300%)";
  wrapper5.style.transform="translateX(0)";
  wrapper6.style.transform="translateX(300%)";
}
function openSHESHOM(){
  wrapper1.style.transform=" translateX(300%)";
  wrapper2.style.transform=" translateX(300%)";
  wrapper3.style.transform="translateX(300%)";
  wrapper4.style.transform="translateX(300%)";
  wrapper5.style.transform="translateX(300%)";
  wrapper6.style.transform="translateX(0)";
}

