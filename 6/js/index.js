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

function getAverageMark() {
  const qwer = students.map(element => {
    let [arr1, ...rest] = Object.values(element.subjects);
   
    const sumArray = arr1.concat(...rest);
    
    
    const sumMarks = (sumArray.reduce((sum, el) => sum + el, 0) / sumArray.length).toFixed(2);
    
    return sumMarks
  });

  qwer.find((el) => {
    return el ;
  })
  
}



console.log(`Середня оцінка студента - ${students[0].name}: ${getAverageMark(students["Tanya"])}`);

////////////////////////////////////////////////////////////////////////////////
function getStudentInfo() {
  infoStudents.name = students[0].name
  infoStudents.course = students[0].course
  infoStudents.averageMark = getAverageMark(students[0]);
}
getStudentInfo();
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
function getBestStudent() {
return getAverageMark(Math.max(...Object.values(students[0])))
}

console.log(getBestStudent());


// const getAverageMark = (students) => {

// const [a, b, c] = Object.values(students.subjects)
//   let combinedArr = [...a, ...b, ...c]
// let sum = 0;
// for (let number of combinedArr) {
//   sum += number;
//   }
// average = (sum / combinedArr.length).toFixed(2);
// return average
// }
// console.log(getAverageMark(students[0])); 
