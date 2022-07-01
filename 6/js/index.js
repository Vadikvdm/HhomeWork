const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
      math: [4, 4, 3, 4],
      algorithms: [3, 3, 3, 4, 4, 4],
      data_science: [5, 5, 3, 4]
    }
  }, {
    name: "Victor",
    course: 4,
    subjects: {
      physics: [5, 5, 5, 3],
      economics: [2, 3, 3, 3, 3, 5],
      geometry: [5, 5, 2, 3, 5]
    }
  }, {
    name: "Anton",
    course: 2,
    subjects: {
      statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
      english: [5, 3],
      cosmology: [5, 5, 5, 5]
    }
}];


const infoTanya = [];
infoStudents ={};
const nameStudents = [];

function getSubjects() {
  let nameStudents = Object.keys(students[0]['subjects']);
  nameStudents.forEach(el => {
    let corectKeys = el.charAt(0).toUpperCase() + el.slice(1).toString().replace('_', ' ');
    infoTanya.push([corectKeys]);
    });
}
getSubjects();
console.log(`Cписок предметів студента - ${students[0].name}: ${infoTanya}`);
///////////////////////////////////////////////////////////////////////////////////

function getAverageMark(students) {
    let [arr1, ...rest] = Object.values(students.subjects);
    const sumArray = arr1.concat(...rest);
    const sumMarks = (sumArray.reduce((sum, el) => sum + el, 0) / sumArray.length).toFixed(2);
    return sumMarks
}
console.log(`Середня оцінка студента - ${students[0].name}: ${getAverageMark(students[0])}`);



////////////////////////////////////////////////////////////////////////////////
function getStudentInfo(students) {
  infoStudents.name = students.name
  infoStudents.course = students.course
  infoStudents.averageMark = getAverageMark(students);
}
getStudentInfo(students[0]);

console.log(`інформація загального виду студенту`, infoStudents);
///////////////////////////////////////////////////////////////////////////////////

function getStudentsNames() { 
  students.forEach(element => {
    nameStudents.push(Object.values(element.name).join(''))
  });
  nameStudents.sort();
}
getStudentsNames();
console.log(`Імена студентів у алфавітному порядку - ${nameStudents}`);
////////////////////////////////////////////////////////////////////////////////

function getBestStudent(students) {
  newArrStudents.name = averageMark;
  newArrStudents.averageMark = 5;
  console.log(newArrStudents);
  return Math.max(newArrStudents.averageMark)
}
console.log(getBestStudent(students));
//////////////////////////////////////////////

// function getBestStudent() {
 
//   return  Math.max(getAverageMark(students[0]), getAverageMark(students[1]), getAverageMark(students[2]));

// }
// console.log(getBestStudent(students.name));


