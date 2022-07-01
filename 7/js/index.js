const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

function getMyTaxes() {
    return this.tax * this.middleSalary;
}
const inform = getMyTaxes.call(ukraine);
console.log(`Податок який заплатить IT-спеціаліст в Україні ${inform}`);
//////////////////////////////////
function getMiddleTaxes() {
     this.tax * this.middleSalary;
};
const informs = getMyTaxes.call(ukraine);
const informs2 = getMyTaxes.call(latvia);
const informs3 = getMyTaxes.call(litva);

console.log(`У середньому податок платять IT-спеціалісти ${Math.floor(informs + informs2 + informs3 / 3)}`);
////////////////////////////////////////////
function getTotalTaxes() {
    this.tax * this.middleSalary * vacancies;
}
const infor = getMyTaxes.call(ukraine);
const infor2 = getMyTaxes.call(latvia);
const infor3 = getMyTaxes.call(litva);
console.log(`Bсього податків платять IT-спеціалісти в Україні ${infor}, Латвії ${infor2}, Литві ${infor3}`);
////////////////////////////////////////////////
const mySalary = {};

function getMySalary(country) {
    setInterval(() => {
        let salary = Math.floor(Math.random() * (2001 - 1500) + 1500);
        let taxes = this.tax * salary;
        let profit = salary - taxes;
        mySalary['salary'] = salary;
        mySalary['taxes'] = taxes;
        mySalary['profit'] = profit;
        console.log(country, mySalary);
    }, 10000);
}
const info = getMySalary.call(ukraine, 'ukraine');
const info2 = getMySalary.call(latvia, 'latvia');
const info3 = getMySalary.call(litva, 'litva');
