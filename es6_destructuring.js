let arr = [3, 5, 7, 9];
let elementOne = arr[0];
let emlementTwo = arr[1];
//Destructuring - phá vỡ cấu trúc - array
let [numberOne, numberTwo, num3, num4, num5] = arr;
console.log("Number One-->", numberOne);
console.log("Number Two-->", numberTwo);
console.log("num5-->", num5);
let student = {
    studentId: "RA001",
    studentName: "Nguyễn Văn A"
};
console.log("Student id -->", student.studentId);
console.log("Student Name-->", student["studentName"]);
// Destructuring
let { studentName, studentId } = student;
console.log("Destructuring - studentName-->", studentName);