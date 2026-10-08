class Course {
    public code: string;
    public name: string;
    public credit: number;

    constructor(code: string, name: string, credit: number) {
    this.code = code;
    this.name = name;
    this.credit = credit;
    }
}
class Student {
    public studentId: string;
    public name: string;

    constructor(studentId: string, name: string) {
        this.studentId = studentId;
        this.name = name;
    }
}
class Teacher {
    public name: string;

    constructor(name: string) {
        this.name = name;
    }
private calculateGrade(score: number): string {
        if (score >= 80) return 'A';
        if (score >= 70) return 'B';
        if (score >= 60) return 'C';
        if (score >= 50) return 'D';
        return 'F';
    }
    
evaluate(student: Student, course: Course, score: number): void {
    const grade = this.calculateGrade(score);

    console.log(`Teacher: ${this.name}`);
    console.log(`Student: ${student.studentId} ${student.name}`);
    console.log(`Course: ${course.code} - ${course.name}`);
    console.log(`Score: ${score}`);
    console.log(`Grade: ${grade}`);
    console.log('-----------------------------------');
    }
}
const teacher = new Teacher("Dr. Smith");
const student1 = new Student("651001", "Anan");
const course1 = new Course("CS101", "Intro to Programming", 3);

teacher.evaluate(student1, course1, 85);

const student2 = new Student("651002", "Alice");
const course2 = new Course("CS102", "Computer Science", 3);

teacher.evaluate(student2, course2, 75);