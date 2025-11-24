function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}

let student1 = new Student("Вячеслав Харцызов", "мужской", 18);
let student2 = new Student("Воробьев Кирилл", "мужской", 28);
let student3 = new Student("Виктория Пестова", "женский", 31);

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function (...marksToAdd) {
  if (!this.hasOwnProperty('marks')) {
    return 0;
  }

  this.marks.push(...marksToAdd);
}

Student.prototype.getAverage = function () {
  if (!this.hasOwnProperty('marks') || this.marks.length === 0) {
    return 0;
  }
  let sum = 0;
  for (let i = 0; i < this.marks.length; i++) {
    sum += this.marks[i];
  }
  return sum / this.marks.length;
}

Student.prototype.exclude = function (reason) {
  delete this.marks
  delete this.subject
  this.excluded = reason;
}


