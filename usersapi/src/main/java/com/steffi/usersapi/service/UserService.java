package com.steffi.usersapi.service;

import com.steffi.usersapi.dao.UserDao;
import com.steffi.usersapi.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import java.util.List;

@Service //or @component => both tells spring boot that this is a service
public class UserService {

    private final UserDao userDao;

    @Autowired //auto wiring into the UserDao interface
    public UserService(@Qualifier("fakeDao") UserDao userDao) {
        //Qualifier lets us have multiple implementations
        this.userDao = userDao;
    }

    public int addUser(User user){
        return userDao.insertUser(user);
    }

//    public List<User> getAllUsers() {
//        return userDao.selectAllUsers();
//    }
}
