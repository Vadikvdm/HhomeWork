let notebook = 15.678;
let pen = 123.965;
let eraser = 90.2345;
let payment = 500;


let produkt = [notebook, pen, eraser];






const maxNumber = Math.max(notebook, pen, eraser);
console.log(maxNumber + "грн");


const minNumber = Math.min(notebook, pen, eraser);
console.log(minNumber + "грн");


const sumMaterial = (notebook + pen + eraser);
console.log(sumMaterial + "грн");

const numberRounding = Math.floor(notebook) + Math.floor(pen) + Math.floor(eraser);
console.log(numberRounding + "грн");

const hundredths = (Math.ceil(numberRounding / 100)) * 100;
console.log(hundredths + "грн");

const paritySign = numberRounding % 2 == 0;
console.log(paritySign);

const surrender = payment - sumMaterial;
console.log(surrender + "грн");

const mean = (sumMaterial / produkt.length).toFixed(4);
console.log(mean + "грн");

const sail = Math.random(produkt) * (10);
console.log(sail  + "грн");

const resaltSail = (sumMaterial - ((sail * sumMaterial) / 100)).toFixed(2);
console.log(resaltSail + "грн");

const netProfit = ((sumMaterial / 2) - (sumMaterial - resaltSail)).toFixed(2);
console.log(netProfit + "грн");

alert(`
Максимальная цена = ${maxNumber} грн
Минимальная цена = ${minNumber} грн
Сумарная стоимость материалов = ${sumMaterial} грн
Округленная стоимость материалов = ${numberRounding} грн
Округление до сотых = ${hundredths} грн
Характеристика целого числа (четное/нечетное) = ${paritySign}
Остаток числа = ${surrender} грн
Среднее значение = ${mean} грн
Скидка на товар = ${sail} грн
Сумма к оплате = ${resaltSail} грн
Чистая прибыль = ${netProfit} грн
`);