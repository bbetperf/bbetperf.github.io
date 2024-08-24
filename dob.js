document.addEventListener("DOMContentLoaded", function () {
  let birthDate = new Date("2003-01-15");
  let currentElement = document.getElementById("current");
  function updateAge() {
      const currentDate = new Date();
      let age = currentDate.getFullYear() - birthDate.getFullYear();
      if (
          currentDate.getMonth() < birthDate.getMonth() ||
          (currentDate.getMonth() === birthDate.getMonth() &&
          currentDate.getDate() < birthDate.getDate())
      ) {
          age--;
      }
      currentElement.textContent = age;
  }
  updateAge();
});