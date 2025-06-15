
function checkAnswer() {
    
    const correctAnswer = "4";

    
    const selectedOption = document.querySelector('input[name="quiz"]:checked');

    
    if (!selectedOption) {
        document.getElementById("feedback").textContent = "Please select an answer.";
        return;
    }

    const userAnswer = selectedOption.value;

    // Step 4: Compare with the correct answer
    const feedback = document.getElementById("feedback");
    if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct! Well done.";
        feedback.style.color = "#28a745"; // green
    } else {
        feedback.textContent = "That's incorrect. Try again!";
        feedback.style.color = "#dc3545"; // red
    }
}


document.getElementById("submit-answer").addEventListener("click", checkAnswer);
