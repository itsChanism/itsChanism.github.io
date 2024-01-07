//
function updateTime() {
  const currentTime = new Date().toLocaleTimeString();
  document.getElementById('timeElement').textContent = currentTime;
}

setInterval(updateTime, 1000);
updateTime(); // Initial call to display time immediately
//
function updateDate(){
  const currentDate = new Date().toLocaleDateString();
  document.getElementById("dateElement").textContent = currentDate;
}
setInterval(updateTime, 100000);
updateDate();//

document.addEventListener('DOMContentLoaded', function () {
  const clockElement = document.getElementById('clock');
  setInterval(() => {
    const now = new Date();
    clockElement.textContent = now.toLocaleTimeString();
  }, 1000);

  const texts = document.querySelectorAll('.animated-text');
  texts.forEach(text => {
    text.addEventListener('click', () => {
      // Trigger fancy animation
      text.classList.add('fancy-animation');
      // Reset animation
      setTimeout(() => text.classList.remove('fancy-animation'), 1000);
    });
  });
});

// Define the fancy animation in your CSS
document.addEventListener('mousemove', function (e) {
  var mask = document.getElementById('mask');
  mask.style.left = e.pageX + 'px';
  mask.style.top = e.pageY + 'px';
});
//timer
let timeEle = document.getElementsById("timeElement");


