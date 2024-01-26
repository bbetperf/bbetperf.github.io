document.addEventListener("DOMContentLoaded", function () {
    let birthDate = new Date("2003-01-15");
    let agesElement = document.querySelector(".ages");
    let currentElement = document.querySelector(".current");
    function updateAgeAndLine() {
      const currentDate = new Date();
      let age = currentDate.getFullYear() - birthDate.getFullYear();
      if (
        currentDate.getMonth() < birthDate.getMonth() ||
        (currentDate.getMonth() === birthDate.getMonth() &&
          currentDate.getDate() < birthDate.getDate())
      ) {
        age--;
      }
      agesElement.innerHTML = `<p2>0</p2><p2 style="text-align: right">${age}</p2>`;
      const maxAge = 80;
      const currentWidth = (age / maxAge) * 100;
      currentElement.style.width = `${currentWidth}%`;
    }
    setInterval(updateAgeAndLine, 60000);
    updateAgeAndLine();
});
