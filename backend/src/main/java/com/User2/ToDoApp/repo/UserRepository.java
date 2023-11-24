package com.User2.ToDoApp.repo;


import com.User2.ToDoApp.model.User;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository {

    Optional<User> findByEmail(String email);

}
