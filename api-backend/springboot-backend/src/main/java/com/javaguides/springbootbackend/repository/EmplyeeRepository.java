package com.javaguides.springbootbackend.repository;

import com.javaguides.springbootbackend.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmplyeeRepository extends JpaRepository<Employee, Long> {
}
