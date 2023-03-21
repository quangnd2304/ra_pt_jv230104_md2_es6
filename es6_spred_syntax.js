let oldArr = [3, 5, 7];
let newArr = [oldArr, 2, 4, 6];
let newArrSpread = [...oldArr, 2, 4, 6];
console.log("New Array-->", newArr);//[[3,5,7],2,4,6]
console.log("New Array Spread-->", newArrSpread);
let oldStudent = {
    studentId: "RA001",
    studentName: "Nguyễn Văn A"
}
let newStudent = { oldStudent, age: 20 };
let newStudentSpread = { ...oldStudent, age: 20 };
console.log("new student-->", newStudent);
console.log("New Student Spread-->", newStudentSpread);