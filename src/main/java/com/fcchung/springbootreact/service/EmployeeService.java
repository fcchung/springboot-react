package com.fcchung.springbootreact.service;

import com.fcchung.springbootreact.exceptions.EmployeeAlreadyExistsException;
import com.fcchung.springbootreact.exceptions.EmployeeNotFoundException;
import com.fcchung.springbootreact.model.Employee;
import com.fcchung.springbootreact.repository.EmployeeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor //This generates constructor for all final and non-final fields
public class EmployeeService implements EmployeeServiceInterface{
    private final EmployeeRepository employeeRepository;

    @Override
    public Employee addEmployee(Employee employee) {
        if (employeeAlreadyExists(employee.getEmail())){
            throw new EmployeeAlreadyExistsException(employee.getEmail() + "Employee already exists in database");
        }
        return employeeRepository.save(employee);
    }



    @Override
    public List<Employee> getEmployees() {
        return employeeRepository.findAll();
    }

    @Override
    public Employee getEmployee(Long id) {
        //because findbyid is optional, it needs to throw an error for not foud
        return employeeRepository.findById(id).orElseThrow(() -> new EmployeeNotFoundException("Cannot find Employee id: "+ id));
    }

    @Override
    public Employee getEmployee(String email) {
        return employeeRepository.findByEmail(email).orElseThrow(()-> new EmployeeNotFoundException(("Cannot find employee email: " + email)));
    }

    @Override
    public Employee updateEmployee(Employee employee, Long id) {
        return employeeRepository.findById(id).map(employee1 -> {
            employee1.setFirstName(employee.getFirstName());
            employee1.setLastName(employee.getLastName());
            employee1.setEmail(employee.getEmail());
            employee1.setDepartment(employee.getDepartment());
            return employeeRepository.save(employee1);
        }).orElseThrow(() -> new EmployeeNotFoundException("Employee not found"));
    }

    @Override
    public void deleteEmployee(Long id) {
        if (!employeeRepository.existsById(id)){
            throw new EmployeeNotFoundException("Exployee id: "+ id +" not found");
        }
        employeeRepository.deleteById(id);
    }
    private boolean employeeAlreadyExists(String email) {
        // isPresent() returns a boolean, true if a value is returned
        return employeeRepository.findByEmail(email).isPresent();
    }
}
