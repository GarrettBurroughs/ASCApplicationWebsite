let text = ["Tv nerd", "Typical alcohol advocate", "Lifelong coffee fanatic", "Freelance social media aficionado", "Internet buff", "Beer lover"];
let opacityTime = 1;
let currIndex = 0;

function changeText(){
  let transitionText = document.getElementById("rotating-text");
  transitionText.innerHTML = text[currIndex];
  currIndex++;
  if(currIndex >= text.length){
    currIndex = 0;
  }
}

setInterval(changeText, 1500);

function fadeOut(text){
  let iterations = 100;
  for(let i = iterations; i >= 0; i--){
    text.style.opacity = `${i / 100}`;
    //console.log(i / 100);
    //console.log(parseInt(text.style.opacity));
    sleep(10);
  }
}

function fadeIn(text){
  let iterations = 100;
  for(let i = 0; i < iterations; i++){
    text.style.opacity = `${i / 100}`;
    //console.log(i / 100);
    //console.log(parseInt(text.style.opacity));
    sleep(10);
  }
}

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}
