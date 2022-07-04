const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

function getMyTaxes(salary) {
    return this.tax * salary;
}
const inform = getMyTaxes.call(ukraine, 1500);
console.log(`Податок який заплатить IT-спеціаліст в Україні ${inform}`);
//////////////////////////////////
function getMiddleTaxes() {
     return this.tax * this.middleSalary;
};
const informs = getMiddleTaxes.call(ukraine);
const informs2 = getMiddleTaxes.call(latvia);
const informs3 = getMiddleTaxes.call(litva);

console.log(`У середньому податок платять IT-спеціалісти ${Math.floor(informs + informs2 + informs3 / 3)}`);
////////////////////////////////////////////
function getTotalTaxes() {
    return this.tax * this.middleSalary * this.vacancies;
}
const infor = getTotalTaxes.call(ukraine);
const infor2 = getTotalTaxes.call(latvia);
const infor3 = getTotalTaxes.call(litva);
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
