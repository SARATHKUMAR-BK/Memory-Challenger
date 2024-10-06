let correctCount = 0;
let currentNumber = 0;
let difficultyLevel = 1;

// Function to start the game
function startGame() {
    // Increase the number range based on the difficulty level
    const maxNumber = 1000 * difficultyLevel; // Increase max number based on difficulty
    var gameType = document.getElementById("submit").getAttribute("gameType");

    if (gameType === "number")
    {
        currentNumber = Math.floor(Math.random() * 9000) + maxNumber;
    }
    else
    {
        
    }
     // Generate a random number
    document.getElementById('challenge-number').textContent = currentNumber; // Show number
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
    if (parseInt(userInput) === currentNumber) {
        correctCount++;
        resultElement.textContent = "Success! You recalled the correct number.";
    resultElement.className = "success"; // Add success class
    } else {
        resultElement.textContent = "Sorry! The number you entered is incorrect.";
        resultElement.className = "failure";
    }

    document.getElementById('recall-input').value = '';

    resultElement.style.display = "block";
    document.getElementById("recall-input").disabled = true;
    document.getElementById("submit").disabled = true;

    if (correctCount >= 1) {
        alert('You reached 3 correct answers! Increasing difficulty.');
        correctCount = 0; // Reset correct answer count
        difficultyLevel *= 10; // Increase difficulty level
    }
    
    // Start the game again
    startGame();

}

// Start the game when the page loads
window.onload = startGame;

