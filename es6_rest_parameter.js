// Xây dựng 1 hàm tính tổng các số (có từ 2 số trở lên)
function add(numberOne, numberTwo, ...otherNumbers) {
    let total = numberOne + numberTwo;
    console.log("OtherNumber---->", otherNumbers);//[8,10]
    for (let i = 0; i < otherNumbers.length; i++) {
        total += otherNumbers[i];
    }
    return total;
}
console.log("Total two number-->", add(4, 6));//10
console.log("Total 3 number-->", add(4, 6, 8));//18
console.log("Total 4 numbers-->", add(4, 6, 8, 10));