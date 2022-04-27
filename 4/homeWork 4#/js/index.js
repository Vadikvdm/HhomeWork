
const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];
const maleStudents = [];
const femaleStudents = [];
const newPair = [];
const newPairThemes = [];
const marksStudents = [];
const newPairMarks = [];
const randomMarks = [];
let ratingScale = 5;


function genderPeople() {
    maleStudents.push(students[0], students[1], students[4]);
    femaleStudents.push(students[2], students[3], students[5]);
    return;
}
genderPeople();

function pairStudents() {
    for (let i = 0; i < maleStudents.length; i++) {
        newPair.push(maleStudents[i] + ' ' + femaleStudents[i]);
    }
    return newPair;
}
console.log(pairStudents());

function taskSorting() {
    for (let i = 0; i < newPair.length; i++) {
        newPairThemes.push(newPair[i] + ', ' + themes[i]);
    }
    return newPairThemes;
}
console.log(taskSorting());

function markStudents() {
    for (let i = 0; i < students.length; i++) {
        marksStudents.push(students[i] + ', ' + marks[i]);
    }
    return marksStudents;
}
console.log(markStudents());

function studentsThemesMarks() {
    for (let i = 0; i < themes.length; i++) {
        pairMars();
    }
    function pairMars() {
        let randomPair = Math.floor((Math.random() * ratingScale) + 1);
    return randomMarks.push(randomPair);
    } 
}
studentsThemesMarks();

function pairMarsStudents() {
    for (let i = 0; i < newPairThemes.length; i++) {
        newPairMarks.push(newPairThemes[i] + ', ' + randomMarks[i]);
    }
    return newPairMarks;
}
console.log(pairMarsStudents());
