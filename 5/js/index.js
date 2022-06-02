
const randomArray = [];
console.log(randomArray);

function getRandomArray(length, min, max) {
    for (let i = 0; i < length; i++) {
        randomArray.push(length[i]);
        console.log(i);
    }
    const lengthNumber = Math.floor(Math.random() * ((max - min) + min));
    return randomArray.push(lengthNumber)
}
console.log(getRandomArray(15, 1, 100));


