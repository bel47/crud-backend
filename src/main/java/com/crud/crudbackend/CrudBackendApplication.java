package com.crud.crudbackend;

import com.crud.crudbackend.model.User;
import com.crud.crudbackend.service.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class CrudBackendApplication implements CommandLineRunner {
    private final UserRepository userRepository;

    public CrudBackendApplication(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public static void main(String[] args) {
        SpringApplication.run(CrudBackendApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {
        userRepository.save(new User("Belay","Retta"));
        userRepository.save(new User("Beruk","HM"));
        userRepository.save(new User("Third","Record"));
    }
}
