function sub(num1, num2) {
    return num1 - num2;
}
// expression function - Tính tổng 2 số
let add = function (numberOne, numberTwo) {
    // Có sử dụng this
    return numberOne + numberTwo;
}
// arrow function - showName: Xin chào bạn abc
let showName = (name) => {
    console.log("Xin chào bạn " + name);
}
showName("Ninh xinh đẹp");
// arrow function không sử dụng this
let showName1 = (name) => console.log("Xin chào bạn ", name);