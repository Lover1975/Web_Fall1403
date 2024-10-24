document.getElementById('dark-mode-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');

    const icon = document.getElementById('icon');
    if (document.body.classList.contains('dark-mode')) {
        icon.textContent = '🌜';
    } else {
        icon.textContent = '🌞';
    }
});

document.getElementById('add-question-btn').addEventListener('click', function() {
    const questionText = document.getElementById('question-text').value;
    const option1 = document.getElementById('option1').value;
    const option2 = document.getElementById('option2').value;
    const option3 = document.getElementById('option3').value;
    const option4 = document.getElementById('option4').value;
    const correctAnswer = document.getElementById('correct-answer').value;
    const category = document.getElementById('category').value;
    const difficulty = document.getElementById('difficulty').value;

    const newQuestion = document.createElement('div');
    newQuestion.classList.add('question-item');
    newQuestion.innerHTML = `
        <h3>متن سوال: ${questionText}</h3>
        <p>گزینه 1: ${option1}</p>
        <p>گزینه 2: <span style="color:green">${correctAnswer == '2' ? option2 + ' (پاسخ صحیح)' : option2}</span></p>
        <p>گزینه 3: ${option3}</p>
        <p>گزینه 4: ${option4}</p>
        <p>دسته‌بندی: ${category}</p>
        <p>درجه دشواری: ${difficulty}</p>
    `;

    document.getElementById('questions-container').appendChild(newQuestion);

    document.getElementById('question-text').value = '';
    document.getElementById('option1').value = '';
    document.getElementById('option2').value = '';
    document.getElementById('option3').value = '';
    document.getElementById('option4').value = '';
});
