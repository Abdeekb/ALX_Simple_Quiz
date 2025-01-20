// 1. إنشاء دالة checkAnswer التي تتحقق من الإجابة
function checkAnswer() {
    // 2. تحديد الإجابة الصحيحة
    const correctAnswer = "4";  // الإجابة الصحيحة هي 4

    // 3. استرجاع الإجابة التي اختارها المستخدم
    const userAnswer = document.querySelector('input[name="quiz"]:checked');  // اختيار العنصر المحدد

    // التحقق من إذا كان المستخدم قد اختار إجابة
    if (!userAnswer) {
        document.getElementById("feedback").textContent = "Please select an answer."; // رسالة إذا لم يختار المستخدم إجابة
        return;
    }

    // 4. مقارنة الإجابة التي اختارها المستخدم بالإجابة الصحيحة
    if (userAnswer.value === correctAnswer) {
        document.getElementById("feedback").textContent = "Correct! Well done."; // إذا كانت الإجابة صحيحة
    } else {
        document.getElementById("feedback").textContent = "That's incorrect. Try again!"; // إذا كانت الإجابة خاطئة
    }
}

// 5. إضافة حدث عند الضغط على زر "Submit Answer"
document.getElementById("submit-answer").addEventListener("click", checkAnswer); // إضافة مستمع حدث للزر
