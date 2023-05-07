let timeCount = document.getElementById("timeCount");
let output = document.getElementById("current-time");
let countdownInterval; 

timeCount.addEventListener("keydown", (event) => {
  if (event.key == "Enter") {
    console.log("enter");
    if (timeCount.value < 0) {
      alert("Please enter a positive value");
      timeCount.value = 0;
    }
    let count = timeCount.value;
    count = Math.floor(count);
    console.log(count);

    if (countdownInterval) {
      clearInterval(countdownInterval);
    }
    document.getElementById("current-time").innerHTML = count
    count--;
    countdownInterval = countdownTimer(count);
  }
});

function countdownTimer(number) {
  let countdown = setInterval(function() {
    document.getElementById("current-time").innerHTML = number;
    console.log(number);
    number--;
    if (number < 0) {
      clearInterval(countdown);
      console.log("Countdown finished!");
      document.getElementById("current-time").innerHTML = "Countdown finished!"
    }
  }, 1000);

  return countdown; 
}
