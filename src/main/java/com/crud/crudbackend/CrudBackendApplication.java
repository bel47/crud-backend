package com.crud.crudbackend;

import com.crud.crudbackend.model.User;
import com.crud.crudbackend.service.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class CrudBackendApplication implements CommandLineRunner {
    @Autowired
    private UserRepository userRepository;
    public static void main(String[] args) {
        SpringApplication.run(CrudBackendApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {
        userRepository.save(new User("Belay","Retta"));
        userRepository.save(new User("second","record"));
        userRepository.save(new User("third","record"));
    }
}
