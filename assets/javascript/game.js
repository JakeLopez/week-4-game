
    var yourScoreDisplay = $('#yourScore')[0];
    console.log(yourScoreDisplay);

    var winCounterDisplay = $('#winCounter')[0];
    console.log(winCounterDisplay);

    var lossCounterDisplay = $('#lossCounter')[0];
    console.log(lossCounterDisplay);

    var crystalCounterDisplay = $('#crystalCounter')[0];
    console.log(crystalCounterDisplay);


    //initial variables
    var crystalCounter = 0;
    var yourScore = 0;
    var winCounter = 0;
    var lossCounter = 0;
    var blueGem = 0;
    var greenGem = 0;
    var redGem = 0;
    var turqoiseGem = 0;
    var gems = document.getElementsByClassName("Gems");
    console.log(gems)


    assignRandomValues(gems);
    //this will be used to play the game
    function startGame() {
    crystalCounterDisplay.innerHTML = crystalCounter;
    winCounterDisplay.innerHTML = winCounter;
    lossCounterDisplay.innerHTML = lossCounter;
    yourScoreDisplay.innerHTML = yourScore;
       
    }

    function randomNumberGenerator(min, max) {
        return Math.floor(Math.random() * max + min);
    }

    function assignRandomValues(gemsArray) {
        for (var i = 0; i < gemsArray.length; i++) {
            gemsArray[i].value = randomNumberGenerator(1, 12);
        }
        crystalCounter = randomNumberGenerator(19, 120);
    }

    //this will tell the game what to do after a win
    function winGame() {
        //if your score matches crystal counter increment win counter
        if (yourScore == crystalCounter) {
            winCounter++;
            winCounterDisplay.innerHTML = winCounter;
            resetGame();
        }

    }
    //this will tell the game what to do after a loss
    function loseGame() {
        //if your score exceeds wht score of the crystal counter increment loss counter
        if (yourScore > crystalCounter) {
            lossCounter++;
            lossCounterDisplay.innerHTML = lossCounter;
            resetGame();
        }
    }
    function resetGame () {
    	yourScore = 0
    assignRandomValues(gems);
    startGame();
    }
    $(".Gems").on("click", function() {
        console.log(this);
        console.log(this.value);
        winGame();
        loseGame();
        yourScore = yourScore + this.value;
        yourScoreDisplay.innerHTML = yourScore;

        console.log(yourScore);

    })
    startGame();