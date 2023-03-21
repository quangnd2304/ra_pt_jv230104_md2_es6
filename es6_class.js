// xây dựng lớp người: mã, tên, tuổi
class Person {
    // Hàm khởi tạo - constructor
    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
    getId() {
        return this.id;
    }
    setId(id) {
        this.id = id;
    }
}
class Student extends Person {
    constructor(id, name, age, mark) {
        super(id, name, age);
        this.mark = mark;
    }
    getStudentInfo() {
        return this.id + "-" + this.name + "-" + this.age + "-" + this.mark;
    }
}
//Khởi tạo đối tượng person từ Person
let personObject = new Person("RA001", "Nguyễn Văn A", 20);
console.log("Person Id--->", personObject.getId());
let student = new Student("RA002", "Nguyễn Văn B", 22, 9);
console.log('Student Info-->', student.getStudentInfo());
