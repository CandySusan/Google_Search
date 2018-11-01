document.getElementById('userInput').addEventListener('keypress', function (event) {
    if (event.keyCode == 13) {
        event.preventDefault();
    }
});