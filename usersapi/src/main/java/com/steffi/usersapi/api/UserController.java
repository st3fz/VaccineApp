package com.steffi.usersapi.api;

import com.steffi.usersapi.model.User;
import com.steffi.usersapi.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import java.util.List;
import java.util.UUID;

@RequestMapping("user")
@RestController //to set this as a rest controller, we can use this to set some endpoints that front end clients can consume
public class UserController {

    private final UserService userService;

    @Autowired //injects the actual service into this constructor
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping
    public void addUser(@Valid @NotNull @RequestBody User user) {
        //Request body takes the data taken and converts it into a User
        userService.addUser(user);
    }

    @GetMapping
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

    @GetMapping(path="{id}")
    public User getUserById(@PathVariable("id") UUID id) {
        //PathVariable Indicates that a method parameter should be bound to a URI template variable
        return userService.getUserById(id)
                .orElse(null);
    }

    @PutMapping(path="{id}")
    public void updateUser(@PathVariable("id") UUID id,@Valid @NotNull @RequestBody User userToUpdate) {
        userService.updateUser(id, userToUpdate);
    }

    @DeleteMapping(path="{id}")
    public void deleteUserById(@PathVariable("id") UUID id) {
        userService.deleteUser(id);
    }
}
