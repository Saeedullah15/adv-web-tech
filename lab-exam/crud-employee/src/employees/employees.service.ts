/* eslint-disable prettier/prettier */
// employees.service.ts
import { Injectable } from '@nestjs/common';
import { Employee } from './entity/employee.entity';
import { EmployeeDto } from './dto/employee.dto';

@Injectable()
export class EmployeesService {
    private employees: Employee[] = [];

    findAll(): Employee[] {
        return this.employees;
    }

    findOne(username: string): Employee {
        return this.employees.find((employee) => employee.username === username);
    }

    create(employeeDto: EmployeeDto): Employee {
        const employee = new Employee(
            employeeDto.name,
            employeeDto.contactNo,
            employeeDto.username,
            employeeDto.password,
        );
        this.employees.push(employee);
        return employee;
    }

    update(username: string, employeeDto: EmployeeDto): Employee {
        const employeeIndex = this.employees.findIndex((e) => e.username === username);
        if (employeeIndex === -1) {
            return null; // Employee not found
        }

        const updatedEmployee = new Employee(
            employeeDto.name,
            employeeDto.contactNo,
            employeeDto.username,
            employeeDto.password,
        );

        this.employees[employeeIndex] = updatedEmployee;
        return updatedEmployee;
    }

    remove(username: string): boolean {
        const index = this.employees.findIndex((e) => e.username === username);
        if (index !== -1) {
            this.employees.splice(index, 1);
            return true;
        }
        return false;
    }
}
