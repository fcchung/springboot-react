package com.fcchung.springbootreact.service;

import com.fcchung.springbootreact.model.Employee;

import java.util.List;

public interface EmployeeServiceInterface   {
    Employee addEmployee(Employee employee);
    List<Employee> getEmployees();
    Employee getEmployee(Long id);
    Employee getEmployee(String email);
    Employee updateEmployee(Employee employee,Long id);
    void deleteEmployee(Long id);
}
