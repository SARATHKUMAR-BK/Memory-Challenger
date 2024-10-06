let correctCount = 0;
let randomValue = 0;
let difficultyLevel = 3;
let gameType = "" ;

function generateRandomAlphaNumeric(length,charset) {
    const characters = charset; // Include numbers
    let result = '';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

// Function to start the game
function startGame() {
    // Increase the number range based on the difficulty level
    const maxNumber = 10 ** difficultyLevel; // Increase max number based on difficulty
     gameType = document.getElementById("submit").getAttribute("gameType");

    if (gameType === "number")
    {
        randomValue = Math.floor(Math.random() * 9000) + maxNumber;
    }
    else if (gameType === "alphabet")
    {
        randomValue = generateRandomAlphaNumeric(difficultyLevel, "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz");
    }
    else
    {
        randomValue = generateRandomAlphaNumeric(difficultyLevel, "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789");
    }
     // Generate a random number
    document.getElementById('challenge-number').textContent = randomValue; // Show number
    setTimeout(() => {
        document.getElementById('challenge-number').textContent = '';
        document.getElementById("recall-input").disabled = false;
        document.getElementById("submit").disabled = false;
    }, 3000);
    
}



// Function to check the user's input
function checkAnswer() {
    var userInput = document.getElementById('recall-input').value;
    var resultElement = document.getElementById("result");
    if (userInput === randomValue.toString()) {
        correctCount++;
        resultElement.textContent = `Success! You recalled the correct ${gameType}.`;
        resultElement.className = "success"; // Add success class
    } 
    else {
        resultElement.textContent = `Sorry! The ${gameType} you entered is incorrect. Try again`;
        resultElement.className = "failure";
    }

    document.getElementById('recall-input').value = '';

    resultElement.style.display = "block";
    document.getElementById("recall-input").disabled = true;
    document.getElementById("submit").disabled = true;

    if (correctCount >= 3) {
       // alert('You reached 3 correct answers! Increasing difficulty.');
        document.getElementById("level-up").textContent = "You reached 3 correct answers! Increasing difficulty.";
        correctCount = 0; // Reset correct answer count
        difficultyLevel++; // Increase difficulty level
    }
    
    setTimeout(() => {
        document.getElementById("level-up").textContent = "";
        document.getElementById("result").textContent = "";
    }, 2000);
    // Start the game again
    startGame();

}

// Start the game when the page loads
window.onload = startGame;

