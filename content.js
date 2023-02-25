setTimeout(function () {
    let buttons = document.querySelectorAll(".artdeco-button--secondary");
    buttons.forEach(function (button) {
        if (button.innerText === "Connect") {
            button.click();
            setTimeout(function () {
                const sendButton = document.querySelector('.ml1');
                if (sendButton && sendButton.innerText === 'Send') {
                    sendButton.click();
                }
            }, 1000)
        }
    });
}, Math.floor(Math.random() * 6 + 5) * 1000);

