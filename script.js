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
function randomaizer(min = 1, max = 100) {
    return Math.floor(Math.random() * (max + 1 - min) + min);
}

let amountExamples = +prompt("Сколько примеров хотите решить?");

for (let i = 0; i < amountExamples; i++) {
    let num1 = randomaizer();
    let num2 = randomaizer();
    let symbol = randomaizer(1, 4);
    let example = 0;

    if (symbol == 1) {
        example = num1 + num2;
        symbol = '+';
    } else if (symbol == 2) {
        example = num1 - num2;
        symbol = '-';
    } else if (symbol == 3) {
        example = num1 * num2;
        symbol = '*';
    } else {
        example = num1 / num2;
        symbol = '/';
    }

    let question = +prompt(num1 + symbol + num2 + ' = ?');

    // Используем тернарный оператор для вывода результата
    alert(question === example ? "Правильно!" : "Неправильно! Правильный ответ: " + example);
}
// random end

// random end
// random end