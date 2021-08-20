package com.steffi.usersapi.dao;

import com.steffi.usersapi.model.User;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface UserDao {

    int insertUser(UUID id, User user); //insert a user with a given ID

    default int insertUser(User user) {
        UUID id = UUID.randomUUID();
        return insertUser(id, user); //insert a user without an id and a randomly generated ID
    }

    List<User> selectAllUsers();

    Optional<User> selectUserById(UUID id);

    int deleteUserById(UUID id);

    int updateUserById(UUID id, User user);
}
