package com.steffi.usersapi.service;

import com.steffi.usersapi.dao.UserDao;
import com.steffi.usersapi.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service //or @component => both tells spring boot that this is a service
public class UserService {

    private final UserDao userDao;

    @Autowired //auto wiring into the UserDao interface
    public UserService(@Qualifier("postgres") UserDao userDao) {
        //Qualifier lets us have multiple implementations
        this.userDao = userDao;
    }

    public int addUser(User user){
        return userDao.insertUser(user);
    }

    public List<User> getAllUsers() {
        return userDao.selectAllUsers();
    }

    public Optional<User> getUserById(UUID id) {
        return userDao.selectUserById(id);
    }

    public int updateUser(UUID id, User newUser) {
        return userDao.updateUserById(id, newUser);
    }

    public int deleteUser(UUID id) {
        return userDao.deleteUserById(id);
    }
}
