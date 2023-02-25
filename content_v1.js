setTimeout(function() {
    let buttons = document.querySelectorAll(".artdeco-button--secondary");
    buttons.forEach(function(button) {
      if (button.innerText === "Connect") {
        button.click();
      }
    });
  }, 500);
  