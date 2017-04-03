'''
Create Student and Teacher classes
Student
learn()
question(teacher) -> calls the teachers answer method
Teacher
teach(student) -> calls the students learn method
answer()
'''

class Student():

    def learn(self):
        pass

    def question(self, teacher):
        print('What?')
        teacher.answer()

class Teacher():

    def answer(self):
        print('Ok?')

    def teach(self, student):
        student.learn()


teach1 = Teacher()
stud1 = Student()

stud1.question(teach1)
teach1.teach(stud1)
