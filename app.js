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

var gameStop = false;
var currentScore = 2;
var s, ss, newScore, gamesTotal, pickedColor;
var squares = document.querySelectorAll(".square");
var titleColor = document.querySelector("#title");
var score = document.querySelector("#score");
var games = document.querySelector("#games");
var message = document.querySelector("#message");
var playAgainButton = document.querySelector("#playAgain");
var resetButton = document.querySelector("#reset");

setNewColors(squares, titleColor);
titleColor.textContent = pickedColor;
playAgainButton.addEventListener("click", function() {
    setNewColors(squares, titleColor);
    titleColor.textContent = pickedColor;
    message.textContent = "";
    currentScore = 2;
    gameStop = false;
});
resetButton.addEventListener("click", function() {
    setNewColors(squares, titleColor);
    titleColor.textContent = pickedColor;
    message.textContent = "";
    currentScore = 2;
    gameStop = false;
    games.textContent = '0 game';
    score.textContent = '0 point';
});

for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click', function() {
        if (!gameStop) {
            if (this.style.background == pickedColor) {
                message.textContent = 'Correct Answer';
                newScore = parseInt(score.textContent) + currentScore;
                gamesTotal = parseInt(games.textContent) + 1;
                score.textContent = newScore.toString() + ' point' + (newScore > 1? 's':'');
                games.textContent = gamesTotal.toString() + ' game' + (gamesTotal > 1? 's':'');
                setAllPickedColor(squares, pickedColor);
                gameStop = true;
            } else {
                this.style.transition = 'background 0.3s';
                this.style.background = '#232323';
                currentScore = currentScore - 1;
            }
        }
    });
}
