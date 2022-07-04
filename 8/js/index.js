class Student {
    constructor(university, course, fullName, marks) {
        this.university = university;
        this.course = course;
        this.fullName = fullName;
        this.marks = marks;
    }
    getInfo() {
        return console.log(`Сеудент ${this.course}го курсу, ${this.university}, ${this.fullName}`);
    }
    
    get getMarks() {
        return this.marks
    }
    set setMarks(marks) {
        this.marks.push(marks);
    }
    getAverageMark() {
        return this.marks.reduce((acc, cur) => acc + cur, 0) / this.marks.length;
    }
    dismiss() {
        const emptyArr = null;
            return console.log(`Студент з ім'ям ${this.fullName} виключено,  оцінки ${emptyArr}`);
    }
    recover() {
            return console.log(`Студент з ім'ям ${this.fullName} поновлено, з оцінками ${this.marks}`);
    }
} 

const vadim = new Student("Одеська державна академія будівництва та архітектури", "5", "Відоменко Вадим", [5, 4, 3, 5]);
console.log(vadim);
console.log(`Перелік оцінок студенту ${vadim.fullName}: ${vadim.marks}`);
vadim.setMarks = 5;
console.log(`Перелік оцінок студенту ${vadim.fullName}: ${vadim.marks}`);
console.log(`Середній бал студенту ${vadim.fullName}: ${vadim.getAverageMark()}`);
vadim.dismiss();
vadim.recover();

class BudgetStudent extends Student {
    constructor(university, course, fullName, marks, budgetary) {
        super(university, course, fullName, marks);
        this.budgetary = budgetary;
        setInterval(() => {
            this.getScholarship();
        }, 30000);
    }
    getAverageMark() {
        return this.marks.reduce((acc, cur) => acc + cur, 0) / this.marks.length;
    }
    dismiss() {
        return `Студент з ім'ям ${this.fullName}, виключено`;
    }
    getScholarship() {
        if (this.budgetary === "Бюджетна форма" && this.getAverageMark() >= 4 && this.dismiss()) { //*this.dismiss() нерозумію, чому при викликі все одно працюе стипендія.
            return console.log(`${this.budgetary} "Ви отримали 1400 грн. стипендії"`);
        } else 
            return this.budgetary = "D";    
    }
    
}
const newVadim = new BudgetStudent("Одеська державна академія будівництва та архітектури", "5", "Відоменко Вадим", [5, 4, 3, 5], "Бюджетна форма")
console.log(newVadim);

newVadim.getScholarship();
// newVadim.dismiss();






