    /* eslint-disable prettier/prettier */
    import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
    Put,
    } from '@nestjs/common';
    import { StudentService } from './student.service';

    @Controller('student')
    export class StudentController {
    constructor(private readonly studentService: StudentService) {}

    @Get()
    getAll() {
        return this.studentService.getAllStudent();
    }

    @Get(':id')
    getOne(@Param('id') id: string) {
        return this.studentService.getStudentById(Number(id));
    }

    @Post()
    postStudent(@Body() body: { name: string; age: number }) {
        return this.studentService.postStudent(body);
    }

    @Put(':id')
    putStudent(
        @Param('id') id: string,
        @Body() body: { name: string; age: number },
    ) {
        return this.studentService.putStudent(Number(id), body);
    }

    @Patch(':id')
    patchStudent(
        @Param('id') id: string,
        @Body() body: Partial<{ name: string; age: number }>,
    ) {
        return this.studentService.patchStudent(Number(id), body);
    }

    @Delete(':id')
    deleteStudent(@Param('id') id: string) {
        return this.studentService.deleteStudent(Number(id));
    }
    }
