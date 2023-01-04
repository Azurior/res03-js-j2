let student = {
	name : "Steven",
	age : 19,
	grades : [12, 14, 8],
	average : 0
};

let grades = student.grades;
let sum = 0;
let average = 0;

for(grade of grades){
	
	sum = sum + grade;

}

average = sum / grades.length;

student.average = average;

console.log(student.average);

// maintenant réécris ça sans utiliser mon code ^^