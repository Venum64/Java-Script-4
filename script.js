// info start

function info(name, birthYear, currentYear) {
    let age = currentYear - birthYear;
    return name + ", Ваш возраст " + age;
}

let Nameinfo = prompt("Введите ваше имя:");
let BirthYearinfo = parseInt(prompt("Введите год рождения:"), 10);
let CurrentYearinfo = parseInt(prompt("Введите нынешний год:"), 10);

let answer = info(Nameinfo, BirthYearinfo, CurrentYearinfo);
alert(answer);

// info end

// random start
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomOperator() {
    let operators = "+-*/";
    return operators.charAt(getRandomInt(0, operators.length - 1));
}

function generateExample() {
    let num1 = getRandomInt(1, 20);
    let num2 = getRandomInt(1, 20);
    let operator = getRandomOperator();
    let answer;

    if (operator === '/') {
        let divisor = getRandomInt(1, 10);
        let dividend = divisor * getRandomInt(1, 10);
        return {
            example: dividend + " / " + divisor,
            answer: dividend / divisor
        };
    }

    if (operator === '+') answer = num1 + num2;
    if (operator === '-') answer = num1 - num2;
    if (operator === '*') answer = num1 * num2;

    return {
        example: num1 + " " + operator + " " + num2,
        answer: answer
    };
}

let count = Number(prompt("Сколько примеров хотите решить?"));

for (let i = 1; i <= count; i++) {
    let exampleObj = generateExample();
    let userAnswer = Number(prompt("Пример " + i + ": " + exampleObj.example + " = ?"));
    if (userAnswer === exampleObj.answer) {
        alert("Ваш ответ верный - " + userAnswer);
    } else {
        alert("Ваш ответ не верный - " + userAnswer + ". Правильный ответ - " + exampleObj.answer + "!");
    }
}

// random end

// random end
// random end