package com.steffi.usersapi.dao;

import com.steffi.usersapi.model.User;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
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
    public List<User> selectAllUsers() {
        return DB;
    }

    @Override //implemented methods from UserDao using alt + enter
    public Optional<User> selectUserById(UUID id) {
        return DB.stream()
                .filter(user -> user.getId().equals(id))
                .findFirst();
    }

    @Override
    public int deleteUserById(UUID id) {
        Optional<User> userMaybe = selectUserById(id);
        if (userMaybe.isEmpty()) {
            return 0;
        } else {
            DB.remove(userMaybe.get());
            return 1;
        }
    }

    @Override
    public int updateUserById(UUID id, User updatedUser) {
        return selectUserById(id)
                .map(u-> {
                    int indexOfUserToUpdate = DB.indexOf(u);
                    if (indexOfUserToUpdate >= 0) {
                        DB.set(indexOfUserToUpdate, new User (id, updatedUser.getName()));
                        return 1;
                    } else {
                        return 0;
                    }
                })
                .orElse(0); //because it has to return an integer otherwise this
    }
}
