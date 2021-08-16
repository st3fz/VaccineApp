package com.steffi.usersapi.model;

import com.fasterxml.jackson.annotation.JsonProperty;

import javax.validation.constraints.NotBlank;
import java.util.UUID;

public class User {

    private final UUID id;
//    private final String username;
    @NotBlank
    private final String name;
//    private final int age;
//    private final String email;
//    private final int mobile;

//    public User(UUID id, String username, String name, int age, String email, int mobile) {
//        this.id = id;
//        this.username = username;
//        this.name = name;
//        this.age = age;
//        this.email = email;
//        this.mobile = mobile;
//    }

    public User(@JsonProperty("id") UUID id, @JsonProperty("name") String name) {
        this.id = id;
        this.name = name;
    }

    public UUID getId() {
        return id;
    }

//    public String getUsername() {
//        return username;
//    }

    public String getName() {
        return name;
    }

//    public int getAge() {
//        return age;
//    }
//
//    public String getEmail() {
//        return email;
//    }
//
//    public int getMobile() {
//        return mobile;
//    }
}
