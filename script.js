const nextButton = document.getElementById('nextButton');
        const options = document.querySelectorAll('.option input');
        const questionElement = document.querySelector('.question p');
        const container = document.querySelector('.container');

        let currentQuestion = 1;
        let score = 0;

        const quizData = [
            {
                question: "What does CSS stand for?",
                answer: "c"
            },
            // Add more questions here...
        ];

        nextButton.addEventListener('click', () => {
            const selectedOption = Array.from(options).find(option => option.checked);
            
            if (selectedOption) {
                if (selectedOption.id === `q${currentQuestion}${quizData[currentQuestion - 1].answer}`) {
                    score++;
                }
                
                currentQuestion++;
                
                if (currentQuestion <= quizData.length) {
                    displayQuestion(currentQuestion);
                } else {
                    displayResult();
                }
            } else {
                alert('Please select an option before moving to the next question.');
            }
        });

        function displayQuestion(questionNumber) {
            const currentQuestionData = quizData[questionNumber - 1];
            questionElement.textContent = `${questionNumber}. ${currentQuestionData.question}`;
            
            for (const option of options) {
                option.checked = false;
            }
        }

        function displayResult() {
            container.innerHTML = `
                <h1>Quiz Completed</h1>
                <p>Your Score: ${score} / ${quizData.length}</p>
            `;
        }

        // Display the first question initially
        displayQuestion(currentQuestion);