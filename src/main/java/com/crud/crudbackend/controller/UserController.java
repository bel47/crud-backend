package com.crud.crudbackend.controller;

import com.crud.crudbackend.model.User;
import com.crud.crudbackend.service.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:4200",allowedHeaders = "*")
public class UserController {
    private final UserRepository userRepository;

    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @GetMapping("/users")
    public List<User> getUsers(){
        return userRepository.findAll();
    }

    @GetMapping("/user/{id}")
    public User getUser(@PathVariable Long id){
       return userRepository.findById(id).orElse(null);
    }

    @DeleteMapping("/user/{id}")
    public boolean deleteUser(@PathVariable Long id){
        userRepository.deleteById(id);
        return true;
    }

    @PostMapping("/user")
    public User createUser(@RequestBody User user){
        return userRepository.save(user);
    }

    @PutMapping("/user")
    public User updateUser(@RequestBody User user){
        return userRepository.save(user);
    }
}
