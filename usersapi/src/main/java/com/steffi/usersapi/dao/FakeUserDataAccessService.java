package com.steffi.usersapi.dao;

import com.steffi.usersapi.model.User;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Repository("fakeDao") // or @Component => both tells spring boot that this is a Repository
public class FakeUserDataAccessService implements UserDao {

    private static List<User> DB = new ArrayList<>();

    @Override
    public int insertUser(UUID id, User user) {
        DB.add(new User(id, user.getName()));
        return 1; //because the insertion always works
    }

    @Override
    public List<User> selectAppUsers() {
        return DB;
    }
}
