    
let start = [
    "Justin",
    "Andy",
    "Jenn",
    "Zack",
    "Scott",
];

//console.log(start.every(item => item.startsWith("J")));

let res = start.filter((name) => {
    return name[0] === "J"
});
console.log(res);

console.log(start.filter(name => name[0] === "J"));

let newArr = []
for (let i = 0; i< start.length: i++){
    if(start[i][0] === "J"){
        newArr.push(start[i])
    }
}
console.log(newArr);

//Find the average of all the students grades 

let students = [
    {
        name: "Andy",
        grade: 3.0
    },
    {
        name: "Bill",
        grade: 2.8
    },
    {
        name: "Jackie",
        grade: 3.0
    },
    {
        name: "Eli",
        grade: 4.0
    },
    {
        name: "Zach",
        grade: 2.1
    }
]

//console.log(name.length / grade.)

//Answer Key 

//1
let total = 0 
for (let student of students){
    console.log(student.grade)
    total += student.grade
}
let average = total / students.length

console.log(average);
//2 
let total2 = 0 
students.forEach(s => total2 += s.grade)
let average2 = total2 / students.length
console.log(average2)

//3
console.log(
    students.reduce((gpa, s) => gpa += student.grade, 0) / students.length
);

/*
let x = [1, 2, 3]
x.map(
    []
) */