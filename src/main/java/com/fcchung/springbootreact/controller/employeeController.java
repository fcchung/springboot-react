package com.fcchung.springbootreact.controller;

import com.fcchung.springbootreact.model.Employee;
import com.fcchung.springbootreact.service.EmployeeServiceInterface;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
//This is like mapping to the route
@RequestMapping("/employees")
@RequiredArgsConstructor //add final constructors
public class employeeController {
    private final EmployeeServiceInterface employeeService;
    @GetMapping
    public ResponseEntity<List<Employee>> getEmployees() {
        return new ResponseEntity<>(employeeService.getEmployees(), HttpStatus.FOUND);
    }
    @PostMapping //This is annotation for HTTP post request
    public Employee addEmployees(@RequestBody Employee employee) {
        return employeeService.addEmployee(employee);
    }

    @PutMapping("/update/{id}")
    public Employee updateStudents(@RequestBody Employee employee, @PathVariable Long id) {
        return employeeService.updateEmployee(employee, id);
    }
    @DeleteMapping("delete/{id}")
    public void deleteEmployee(@PathVariable Long id){
        employeeService.deleteEmployee(id);
    }
    @GetMapping("employee/{id}")
    public Employee getEmployeeById(@PathVariable Long id){
        return employeeService.getEmployee(id);
    }

    @GetMapping("employee/{email}")
    public Employee getEmployee(@PathVariable String email) {
        return employeeService.getEmployee(email);
    }

}
