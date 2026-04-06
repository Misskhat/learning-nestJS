/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { NotFoundError } from 'rxjs';

@Injectable()
export class StudentService {
  private students = [
    { id: 1, name: 'mishkat', age: 30 },
    { id: 2, name: 'hossain', age: 29 },
  ];

  //get method
  getAllStudent() {
    return this.students;
  }

  getStudentById(id: number) {
    const student = this.students.find((s) => s.id === id);
    if (!student) throw new NotFoundException('Student not found');
    return student;
  }

  //post method
  postStudent(data: { name: string; age: number }) {
    const id = this.students.length + 1;
    const newStudent = { id, ...data };
    this.students.push(newStudent);
    return newStudent;
  }

  //put method
  putStudent(id: number, data: { name: string; age: number }) {
    const student = this.students.find((s) => s.id === id);
    if (!student) throw new NotFoundException('Student not found');
    student.name = data.name;
    student.age = data.age;
    return student;
  }

  //patch method
  patchStudent(id: number, data: Partial<{ name: string; age: number }>) {
    const studentId = this.students.findIndex((s) => s.id === id);
    if (studentId === -1) throw new NotFoundException('Student not found');
    return Object.assign(this.students[studentId], data);
  }

  //delete method
  deleteStudent(id: number) {
    const studentId = this.students.findIndex((s) => s.id === id);
    if (studentId === -1) throw new NotFoundException('Student not found ');
    const deleteStudent = this.students.splice(studentId, 1);
    return { message: 'Student delete', student: deleteStudent[0] };
  }
}
