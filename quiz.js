
    const quizQuestions = [
        {
            question: "What is the capital of India?",
            answer: "delhi"
        },
        {
            question: "Which language is used for web development?",
            answer: "javascript"
        },
        {
            question: "Which planet is known as the Red Planet?",
            answer: "mars"
        },
        {
            question: "What does HTML stand for?",
            answer: "hypertext markup language"
        },
        {
            question: "Which company developed JavaScript?",
            answer: "netscape"
        }
    ];

    function runQuiz() {

        let score = 0;

        for (let i = 0; i < quizQuestions.length; i++) {

            let userAnswer = prompt(
                quizQuestions[i].question
            );

            userAnswer = (userAnswer || "").toLowerCase().trim();

            if (userAnswer === quizQuestions[i].answer) {

                score++;
                alert("Correct Answer!");

            } else {

                alert(
                    "Wrong Answer! Correct answer is: " +
                    quizQuestions[i].answer
                );

            }
        }

        alert(
            "Quiz Completed!\nYour Final Score: " +
            score + " out of " + quizQuestions.length
        );
    }

    runQuiz();
