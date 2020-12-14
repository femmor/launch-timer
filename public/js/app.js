const daysCount = document.getElementById('days')
const hoursCount = document.getElementById('hours')
const minutesCount = document.getElementById('minutes')
const secondsCount = document.getElementById('seconds')

// The date we are counting down to
const countDownDate = new Date('Jan 1, 2021 15:37:25').getTime()

// Update the countdown every 1 second
const x = setInterval(() => {
    // Get today's date and time
    const now = new Date().getTime()

    // Distance between now and the countdown date
    const distance = countDownDate - now
    console.log(distance)

    // Calculate time in days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result
    daysCount.innerText = days
    hoursCount.innerText = hours
    minutesCount.innerText = minutes
    secondsCount.innerText = seconds

    // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    daysCount.innerText = "00"
    hoursCount.innerText = "00"
    minutesCount.innerText = "00"
    secondsCount.innerText = "00"
    document.getElementById("launchText").classList.remove('hidden');
  }

}, 1000);