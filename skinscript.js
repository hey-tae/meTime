console.log(4+4)

// let future = new Date('Sep 16, 2021 00:45:30')

// let timer = setInterval(function(){
//     let present = new Date ().getTime()
//     let difference = future - present

//     //time calculations

//     let days = Math.floor(difference / (1000 * 60 * 60 * 24))
//     let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
//     let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
//     let seconds = Math.floor((difference % (1000 * 60)) / 1000)

//     document.getElementById('timeBox').innerHTML = days + "d " + hours + "h "
//     + minutes + "m " + seconds + "s "

//     if(difference < 0){
//         clearInterval(timer)
//         document.getElementById('timeBox').innerHTML = 'Expired'
    
// } 1000)

var countDownDate = new Date("Sep 16, 2021 02:40:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  if (minutes < 10 && seconds < 10){
      document.getElementById("timeBox").innerHTML = '0' + minutes + ' : ' + '0' + seconds
    // document.getElementById("timeBox").innerHTML = '0'+ minutes + ':' + seconds
  }else{
    document.getElementById("timeBox").innerHTML = '0'+ minutes + ' : ' + seconds
  }
  
//   hours + "h "  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timeBox").innerHTML = "don't forget to moisturize";
  }
}, 1000);