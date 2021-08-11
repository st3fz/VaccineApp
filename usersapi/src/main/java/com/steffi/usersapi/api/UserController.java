package com.steffi.usersapi.api;

import com.steffi.usersapi.model.User;
import com.steffi.usersapi.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("api/user")
@RestController //to set this as a rest controller, we can use this to set some endpoints that front end clients can consume
public class UserController {

    private final UserService userService;

    @Autowired //injects the actual service into this constructor
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping
    public void addUser(@RequestBody  User user) {
        //Request body takes the data taken and converts it into a User
        userService.addUser(user);
    }
}
