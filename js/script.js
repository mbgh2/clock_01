let externalTimer;

setInterval(function() {
   let display = document.querySelector('.display #time');
   let time = new Date();
   // externalTimer = time;
   // console.log(externalTimer);
   let hour = time.getHours();
   let minutes = time.getMinutes();
   let seconds = time.getSeconds();
   if(hour < 10) hour = '0' + hour;
   if(minutes < 10) minutes = '0' + minutes;
   if(seconds < 10) seconds = '0' + seconds; 

   display.textContent = hour + ':' + minutes + ':' + seconds;
}, 1000);













