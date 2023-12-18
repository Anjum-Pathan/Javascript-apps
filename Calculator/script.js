const buttons = document.querySelectorAll('.calc-button');
buttons.forEach(button => {
    button.addEventListener('click', function () {
       const buttonValue = this.textContent;
        document.getElementById('input').value += buttonValue;
    });
});
document.getElementById('equal').addEventListener('click', function () {
    document.getElementById('input').value = eval(document.getElementById('input').value);
});
