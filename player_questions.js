document.getElementById('dark-mode-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');

    const icon = document.getElementById('icon');
    if (document.body.classList.contains('dark-mode')) {
        icon.textContent = '🌜';
    } else {
        icon.textContent = '🌞';
    }
});


document.addEventListener("DOMContentLoaded", function () {
    const questions = {
        ریاضی: [
            {
                question: "2 + 3 چند می‌شود؟",
                options: ["3", "5", "6", "4"],
                correct: 2
            },
            {
                question: "تفریق 9 از 13 چند می‌شود؟",
                options: ["4", "2", "3", "5"],
                correct: 1
            }
        ],
        فیزیک: [
            {
                question: "جرم زمین چقدر است؟",
                options: ["5×10^24 کیلوگرم", "6×10^24 کیلوگرم", "7×10^24 کیلوگرم", "10^25 کیلوگرم"],
                correct: 2
            },
            {
                question: "شتاب جاذبه زمین چند است؟",
                options: ["9.8 متر بر ثانیه", "8.9 متر بر ثانیه", "9.81 متر بر ثانیه", "7.8 متر بر ثانیه"],
                correct: 3
            }
        ],
        شیمی: [
            {
                question: "جرم مولی آب چقدر است؟",
                options: ["18 گرم", "20 گرم", "16 گرم", "22 گرم"],
                correct: 1
            },
            {
                question: "فرمول شیمیایی نمک چیست؟",
                options: ["NaCl", "H2O", "CO2", "O2"],
                correct: 1
            }
        ]
    };

    const categorySelect = document.getElementById("category");
    const categoryQuestionBtn = document.getElementById("category-question-btn");
    const randomQuestionBtn = document.getElementById("random-question-btn");
    const questionBox = document.getElementById("random-question-box");
    const optionsContainer = questionBox.querySelector(".options");

    function displayQuestion(questionObj) {
        const questionText = questionBox.querySelector("h3");
        questionText.textContent = questionObj.question;

        optionsContainer.innerHTML = "";
        questionObj.options.forEach((option, index) => {
            const button = document.createElement("button");
            button.classList.add("option");
            button.textContent = `گزینه ${index + 1}: ${option}`;
            button.dataset.answer = index + 1;

            button.addEventListener("click", function () {
                optionsContainer.querySelectorAll(".option").forEach(btn => {
                    btn.classList.remove("correct", "incorrect");
                });
                if (index + 1 === questionObj.correct) {
                    button.classList.add("correct");
                } else {
                    button.classList.add("incorrect");
                    optionsContainer.querySelector(`[data-answer="${questionObj.correct}"]`).classList.add("correct");
                }
            });
            optionsContainer.appendChild(button);
        });
    }
    
    function getRandomQuestion() {
        const categories = Object.keys(questions);
        const randomCategory = categories[Math.floor(Math.random() * categories.length)];
        const randomQuestionIndex = Math.floor(Math.random() * questions[randomCategory].length);
        return questions[randomCategory][randomQuestionIndex];
    }

    randomQuestionBtn.addEventListener("click", function () {
        const randomQuestion = getRandomQuestion();
        displayQuestion(randomQuestion);
    });

    categoryQuestionBtn.addEventListener("click", function () {
        const selectedCategory = categorySelect.value;
        const randomQuestionIndex = Math.floor(Math.random() * questions[selectedCategory].length);
        const categoryQuestion = questions[selectedCategory][randomQuestionIndex];
        displayQuestion(categoryQuestion);
    });
});
