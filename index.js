console.log("hello world");

var id = 638;
var name = "pongtorn";
var fullname = `name${id}`;
var ok = true;

var arrstudent = ["pong","torn","",888,"111",{id:001}];

console.log("test array ="+arrstudent[5]);

var student ={
    id:"0001",
    name:"pongtorn test"
}

//การเพิ่ม key ของตัว object
student.age = 25;
student["age"] = 25;

//การลบ key ของตัว object
delete student.age;

//console.log(student["id"]);
//console.log(student.id);