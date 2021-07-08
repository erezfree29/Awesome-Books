// const date = new Date(2009, 10, 10);  // 2009-11-10
// const month = date.toLocaleString('default', { month: 'long' });
// console.log(month);


function getDateTime() {

     let now = new Date();
     let year = now.getFullYear();
     let month = now.getMonth() + 1;
     // month = month
     let day = now.getDate();
     let hour = now.getHours();
     let minute = now.getMinutes();
     let second = now.getSeconds();
     if (month.toString().length == 1) {
          month = '0' + month;
     }
     if (day.toString().length == 1) {
          day = '0' + day;
     }
     if (hour.toString().length == 1) {
          hour = '0' + hour;
     }
     if (minute.toString().length == 1) {
          minute = '0' + minute;
     }
     if (second.toString().length == 1) {
          second = '0' + second;
     }
     
     let dateTime =  year + '/' + month + '/' + day + ' ' + hour + ':' + minute + ':' + second;
     return dateTime;
}


setInterval(function () {
     currentTime = getDateTime();
     document.getElementById("digital-clock").innerHTML = currentTime;
}, 1000);