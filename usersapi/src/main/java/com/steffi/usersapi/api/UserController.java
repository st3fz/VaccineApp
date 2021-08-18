package com.steffi.usersapi.api;

import com.steffi.usersapi.model.User;
import com.steffi.usersapi.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.lang.NonNull;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.UUID;

@RequestMapping("users")
@RestController //to set this as a rest controller, we can use this to set some endpoints that front end clients can consume
public class UserController {

    private final UserService userService;

    @Autowired //injects the actual service into this constructor
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

    @GetMapping(path="user/{id}")
    public User getUserById(@PathVariable("id") UUID id) {
        //PathVariable Indicates that a method parameter should be bound to a URI template variable
        return userService.getUserById(id)
                .orElse(null);
    }

    @PostMapping(path="add")
    public void addUser(@Valid @NonNull @RequestBody User user) {
        //Request body takes the data taken and converts it into a User
        userService.addUser(user);
    }

    @PutMapping(path="user/{id}")
    public void updateUser(@PathVariable("id") UUID id, @Valid @NonNull @RequestBody User userToUpdate) {
        userService.updateUser(id, userToUpdate);
    }

    @DeleteMapping(path="user/{id}")
    public void deleteUserById(@PathVariable("id") UUID id) {
        userService.deleteUser(id);
    }
}
