var fs = require('fs');

//Exercise
//1. Show All students
//2. Create a new student
//3. Save & Exit
/*Đặt câu hỏi -  nếu chọn:
=> 1: show all student in data.json fs.readFileSync, JSON.par
=> 2: tạo student mới và lưu vào array.
Your name:
Your age:
Your class:
=> 3: lưu.
*/


var readlineSync = require('readline-sync');
var userName = readlineSync.question('May I have your name?')

var studentList = []

studentList.push(userName);
console.log(studentList, 'donny');
fs.writeFileSync('./data.json', studentList);