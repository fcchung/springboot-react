package com.fcchung.springbootreact.repository;

import com.fcchung.springbootreact.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

//This extends Jparepository, it comes with pre-written CRUD methods.
public interface EmployeeRepository extends JpaRepository<Employee, Long> {
    //Use optional instead of boolean because it can candle null value
    Optional<Employee> findByEmail(String email);
}
