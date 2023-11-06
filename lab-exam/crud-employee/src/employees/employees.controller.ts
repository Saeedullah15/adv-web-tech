/* eslint-disable prettier/prettier */
// employees.controller.ts
import { Controller, Get, Param, Post, Put, Delete, Body } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { Employee } from './entity/employee.entity';
import { EmployeeDto } from './dto/employee.dto';

@Controller('employees')
export class EmployeesController {
    constructor(private readonly employeesService: EmployeesService) { }

    @Get()
    findAll(): Employee[] {
        return this.employeesService.findAll();
    }

    @Get(':username')
    findOne(@Param('username') username: string): Employee {
        return this.employeesService.findOne(username);
    }

    @Post()
    create(@Body() employeeDto: EmployeeDto): Employee {
        return this.employeesService.create(employeeDto);
    }

    @Put(':username')
    update(@Param('username') username: string, @Body() employeeDto: EmployeeDto): Employee {
        return this.employeesService.update(username, employeeDto);
    }

    @Delete(':username')
    remove(@Param('username') username: string): boolean {
        return this.employeesService.remove(username);
    }
}
