document.addEventListener("DOMContentLoaded", function () {
  function updateClock() {
    const losAngelesTimezone = "America/Los_Angeles";
    const options = {
      timeZone: losAngelesTimezone,
      hour12: true,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    };
    const losAngelesTime = new Date()
      .toLocaleTimeString("en-US", options)
      .replace(/[APMapm]+$/, "")
      .trim(); // Убираем AM/PM и пробелы
    const [hours, minutes, seconds] = losAngelesTime.split(":");
    const formattedTime = `${hours}:${minutes}:${seconds}`;
    document.getElementById("timer").innerText = formattedTime;
  }
  function updateDate() {
    const currentDate = new Date();
    const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  
    const weekday = weekdays[currentDate.getDay()];
    const month = months[currentDate.getMonth()];
    const day = currentDate.getDate();
    const year = currentDate.getFullYear();
  
    const formattedDate = `${weekday}, ${month} ${day}, ${year}`;
    document.getElementById("date").innerText = formattedDate;
  }        
  function updateOSAndWindowSize() {
    const osInfo = `${navigator.platform},`;
    const windowSize = `${window.innerWidth}x${window.innerHeight}`;
    document.getElementById("osAndWindowSize").innerText = `${osInfo} ${windowSize}`;
  }
  setInterval(updateClock, 1000);
  setInterval(updateDate, 60000);
  window.addEventListener("resize", updateOSAndWindowSize);
  updateClock();
  updateDate();
  updateOSAndWindowSize();
});
