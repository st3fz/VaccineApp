package com.steffi.usersapi.dao;

import com.steffi.usersapi.model.User;

import java.util.List;
import java.util.UUID;

public interface UserDao {

    int insertUser(UUID id, User user); //insert a person with a given ID

    default int insertUser(User user) {
        UUID id = UUID.randomUUID();
        return insertUser(id, user); //insert a person without an id and a randomly generated ID
    }

    List<User> selectAppUsers();
}
