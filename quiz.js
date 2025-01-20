function checkAnswer() {
    const correctAnswer = "4";  // الإجابة الصحيحة

    // استرجاع الإجابة التي اختارها المستخدم
    const userAnswer = document.querySelector('input[name="quiz"]:checked'); 

    // التحقق إذا كان المستخدم قد اختار إجابة أم لا
    if (!userAnswer) {
        document.getElementById("feedback").textContent = "Please select an answer."; 
        return;
    }

    // المقارنة بين إجابة المستخدم والإجابة الصحيحة
    if (userAnswer.value === correctAnswer) {
        document.getElementById("feedback").textContent = "Correct! Well done."; 
    } else {
        document.getElementById("feedback").textContent = "That's incorrect. Try again!"; 
    }
}

// إضافة مستمع حدث للزر "Submit Answer"
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
