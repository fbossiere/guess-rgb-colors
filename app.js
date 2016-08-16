var randomColors = function(n) {
    var colors = [];
    for (var i = 0; i < n; i++) {
        r = Math.floor(Math.random() * 256);
        g = Math.floor(Math.random() * 256);
        b = Math.floor(Math.random() * 256);
        colors.push("rgb(" + r + ", " + g + ", " + b + ")");
    }
    return colors;
};

var randomColor = function(n) {
    return Math.floor(Math.random() * n);
};

var setAllPickedColor = function(squares, pickedColor) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.background = pickedColor;
    }
};

var setNewColors = function(squares, titleColor) {
    var colors = randomColors(squares.length);
    pickedColor = colors[randomColor(squares.length)];
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.background = colors[i];
    }
};

var squares = document.querySelectorAll(".square");
var titleColor = document.querySelector("#title");
var message = document.querySelector("#message");
var resetButton = document.querySelector("#reset");
var pickedColor;
setNewColors(squares, titleColor);

resetButton.addEventListener("click", function() {
    setNewColors(squares, titleColor);
    titleColor.textContent = pickedColor;
    message.textContent = "";
});

for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click', function() {
        if (this.style.background == pickedColor) {
            message.textContent = 'Correct Answer';
            setAllPickedColor(squares, pickedColor);
        } else {
            this.style.background = '#232323';
        }
    });
}
