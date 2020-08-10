package com.crud.crudbackend.service;

import com.crud.crudbackend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import javax.persistence.Id;

public interface UserRepository extends JpaRepository<User, Long>  {

}
