
const randomArray = [];
const sortArray = [];
const negativeNumber = [];
const variousOffers = ["Are you fucking kidding?", "Holy shit!"];
const badWords = ["shit", "fuck"];
const newVariousOffers = [];

function getRandomArray(length, min, max) {
    
    function randomNum() {
        const lengthNumber = Math.floor(Math.random() * ((max - min) + min) + 1);
        return randomArray.push(lengthNumber)
    }
    for (let i = 0; i < length; i++) {
        randomNum();
    }
}
getRandomArray(15, 1, 100);
console.log(randomArray);
//////////////////////////////////////////////////////Мода всіх переданих в неї аргументів

function getModa() {
    let uniCod = [];
    for (let i = 0; i < randomArray.length; i++) {
        for (let j = 0; j < i; j++)
        if (randomArray[j] === randomArray[i]) {
            uniCod.push(randomArray[i])
        }
    }
    console.log(`Мода всіх переданих в неї аргументів = ${uniCod}`)
}
getModa();
////////////////////////////////////////////////////////////////////////////////// середнє арифметичне значення
function getAverage() {
    const sumRandomArray = randomArray.reduce((sum, elem) => {return sum + elem});
    const meanNum = sumRandomArray / randomArray.length;
    return Math.round(meanNum);
}
console.log(`середнє арифметичне значення = ${getAverage()}`);
/////////////////////////////////////////////////////////////////////////Медіана масиву
function getMedian() {
    if (randomArray.length % 2 !== 0) {
        const newRandomArray = randomArray.map((num) => {
            const uopi = sortArray.sort((a, b) => {
                return a-b;
            });
            return sortArray.push(num)
        });
        const resMedian = ((sortArray.length - 1) / 2);
        const indexMedian = sortArray[resMedian];
        console.log(`Медіана масиву = ${indexMedian}`);
    } else {
        const newRandomArray = randomArray.map((num) => {
            const uopi = sortArray.sort((a, b) => {
                return a-b;
            });
            return sortArray.push(num)
        });
        const medianMean = (sortArray.length) / 2;
            const medianCalc = (sortArray[medianMean - 1] + sortArray[medianMean]) / 2;
            console.log(`Медіана масиву = ${medianCalc}`);
    }
}
getMedian();
////////////////////////////////////////////////////////////////////////Непарні числа
function filterEvenNumbers() {
    const pairNumber = randomArray.filter((num) => {
        return num % 2 !== 0; 
    })
    console.log(`Непарні числа = ${pairNumber}`);
}
filterEvenNumbers();
/////////////////////////////////////////////////////////////////////////Числа які діляться на ціло на 5 
function filterEvenNumbers5() {
    const pairNumber5 = randomArray.filter((num) => {
        return num % 5 == 0; 
    })
    console.log(`Числа які діляться на ціло на 5 = ${pairNumber5}`);
}
filterEvenNumbers5();
////////////////////////////////////////////////////Генерація випадкових чисел
function countNegativeNumbers(length, min, max) {
    function randomNegativNum() {
        const lengthNumber = Math.floor((Math.random() - Math.random()) * ((max - min) + min + 1));
        if (lengthNumber === 0) {
            randomNegativNum();
        }
        return negativeNumber.push(lengthNumber)
    }
    for (let i = 0; i < length; i++) {
        randomNegativNum();
    }
}
countNegativeNumbers(5, -10, 10);
console.log(`Генерація випадкових чисел = ${negativeNumber}`);
////////////////////////////////////////////////////////////Чисела більше '0'
function countPositiveNumbers() {
    const getPositive = negativeNumber.filter((num) => {
        return num > 0;
    });
    console.log(`Чисела більше '0' = ${getPositive}`);
}
countPositiveNumbers();
////////////////////////////////////////////////////////////

// Далі я завис)))!!!!!!!!!!!!!!!!!!!!!!!!!!