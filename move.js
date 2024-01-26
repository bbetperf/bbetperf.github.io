document.addEventListener("mousemove", function (event) {
    document.querySelectorAll(".container").forEach(function (move) {
      const moving_value = move.getAttribute("data-value");
      const screenWidth = window.screen.width;
      const screenHeight = window.screen.height;
      if (screenWidth > 1024) {
        const x = (event.clientX * moving_value - screenWidth / 2) / 250;
        const y = (event.clientY * moving_value - screenWidth / 2) / 250;
        move.style.transform =
          "translateX(" + x + "px) translateY(" + y + "px)";
      } else move.style.transform = "translateX(" + 0 + "px) translateY(" + 0 + "px)";
    });
  });
