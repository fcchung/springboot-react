package com.fcchung.springbootreact.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.NaturalId;
/*
This defines the data structure for each employee
 */

//The @ are Java annotations. It the metadata for program source code.
// They provide additional information about the program to the compiler but are not part of the program.
@Entity
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class Customer {
    //These annotate the id
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String firstName;
    private String lastName;
    // this will make the email unique and became an ID, naturally this is set to false
    // mutable = true lets the users modify the email
    @NaturalId(mutable = true)
    private String email;
    private String department;

}
