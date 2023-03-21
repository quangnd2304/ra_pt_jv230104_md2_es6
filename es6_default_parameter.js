//Cách 1: Đặt giá trị mặc định tại thời điểm khai báo tham số
function add(numberOne = 3, numberTwo = 6) {
    console.log("numberOne-->", numberOne);
    console.log("numberTwo-->", numberTwo);
    return numberOne + numberTwo;
}
console.log("Total two number-->", add(4));//Result: 10
console.log("Total-->", add());//9
console.log("Total-->", add(5, 7));
// Cách 2: Đặt giá trị mặc định trong thân hàm
function showName(studentName) {
    studentName = studentName || "Tên mặc định";
    console.log("Xin chào " + studentName);
}
showName();//Xin chào Tên mặc định