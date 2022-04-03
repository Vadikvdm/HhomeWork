let choice = alert(`Оберіть функцію з якої ви хочете працювати`);

do {
    choiceFunc = +prompt(`
1 - Отримання найбільшої цифри в числі
2 - Визначення ступені числа
3 - Форматування слів роблячи першу букву великою
4 - Розрахунок зарабітньої плати без ПДВ
5 - Повернення випадкого цілого числа в діапазоні від N до M
6 - Підрахунок певної букви, які повторюються в слові
7 - Конвертор в долори в гривні
8 - Генерація випадкового паролю
9 - Видалення певної букви з речення
10 - Перевірка слова на паліндром
11 - Видалення букви, які повторюються більше 1-го разу
`);
} while (!Number (choiceFunc > 0 && choiceFunc <= 11));

switch (choiceFunc) {
    case 1:
        alert(`Найбільша цифра в числі ${largestFigure()}`);
        break;
    case 2:
        alert(`число, що зводиться в ступінь, дорівнює ${degreeNumber()}`);
        break;
    case 3:
        alert(`Відредуговане слово ${firstLetter()}`);
        break;
    case 4:
        alert(`Залишок суми без ПДВ ${calculationPdv()}`);
        break;
    case 5:
        alert(`Випадкове ціле число в діапазоні ${getRandomInt()}`);
        break
    case 6:
        alert(`Підраховано букви в слові ${countLetter()}`);
        break
    case 7:
        alert(`Результат ${convertCurrency()}`);
        break
    case 8:
        alert(`Ваш випадковий пароль: ${getRandomPassword()}`);
        break
    case 9:
        alert(`Результат видалення букви: ${deleteLetter()}`);
        break
    case 10:
        alert(`Результат визначення слова(речення) на плиндром: ${isPalyndrom()}`);
        break
    case 11:
        alert(`Результат видалення букв: ${deleteDuplicateLetter()}`);
        break
    default:
}


    


function largestFigure() {
    if (choiceFunc == 1) {
        do {
        largest = +prompt(`Введіть будь яке число`);
        } while (largest < 0 || !isFinite(largest));
        return largest.toString().split('').sort((a, b) => b - a)[0];
    }  
}

function degreeNumber() {
    if (choiceFunc == 2) {
        do {
        x = +prompt(`Введіть чило`);
        } while (x < 0 || !isFinite(x));
        
        do {
        y = +prompt(`Введіть ступень числа`);
        } while (y < 0 || !isFinite(y));
        let result = 1;
        for (let i = 0; i < y; i++) {
            result = result * x;
        }
        return(result);
    } 
}

function firstLetter() {
    if (choiceFunc == 3) {
        const textAny = prompt(`Введіть будь який текст`);
        let result = textAny.toLowerCase();
        return result[0].toUpperCase() + result.substring(1);
    }
}

function calculationPdv() {
    if (choiceFunc == 4) {
        do {
        salary = +prompt(`Введіть число`);
        } while (salary < 0 || !isFinite(salary));
        do {
        percent = +prompt(`Введіть процент`)
        } while (percent < 0 || !isFinite(percent));
        return salary - ((percent * salary) / 100);
    }
}

function getRandomInt() {
    if (choiceFunc == 5) {
        do {
        minNumber = +prompt(`Введіть значення N`);
        } while (minNumber < 0 || !isFinite(minNumber));
        do {
        maxNumber = +prompt(`Введіть значення M`);
        } while (maxNumber < 0 || !isFinite(maxNumber));
        return Math.floor(Math.random() * (maxNumber - minNumber)) + minNumber;
    }
}

function countLetter() {
    if (choiceFunc == 6) {
        const speech = prompt(`Введіть слово або речення`);
        const letter = prompt(`Введіть букву для підрахунку`);
        for(var i = count = 0; i < speech.length; count+=+(letter === speech[i++]));
        return count;
    }
}

function convertCurrency() {
    if (choiceFunc == 7) { 
        let exchangeDollar = prompt(`Введіть значення`, '100$');
        let dollarMoney = exchangeDollar.toLowerCase();
        if (dollarMoney.includes("$")) {
            return dollarMoney.split("").splice(0, dollarMoney.length - 1).join("") * 29;
        } else if (dollarMoney.includes("uah")) {
            return dollarMoney.split("").splice(0, dollarMoney.length - 3).join("") / 29;
        } else if (dollarMoney) {
            return alert(`Нажаль інші валюти не конвертуються`)
        }
    }
}

function getRandomPassword() {
    if (choiceFunc == 8) {
        do {
        digitsNumber = +prompt(`Введіть з кількох цифр буде складатись ваш пароль`, 8);
        } while (digitsNumber < 0 || !isFinite(digitsNumber));
        let result = Math.random().toString().slice(2) * 20001;
        return result.toString().split("").splice(0, digitsNumber).join("");
    }
}

function deleteLetter() {
    if (choiceFunc == 9) {
        let speech = prompt(`Введінь речення`);
        let letter = prompt(`Введіть букву яку ви хочете видалити`);
        return speech.replaceAll(letter, "");
    }
}

function isPalyndrom() {
    if (choiceFunc == 10) {
        let speechPalyndrom = prompt(`Введіть слово або речення`).toLowerCase().split(" ").join("");
        let speechReverse = speechPalyndrom.split("").reverse().join("");
        return speechPalyndrom.includes(speechReverse);
    }
}

function deleteDuplicateLetter() {
    if (choiceFunc == 11) {
        let deleteLetter = prompt(`Введіть слово або речення`);
        let result = deleteLetter.split('').reduce((o, v, i) => { o[v] = v; return o; }, {});
        return Object.keys(result).join("");
    }
}