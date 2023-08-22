package com.atstudy.dao;

import com.atstudy.domain.User;

public class UserDao {
    User findById(){
        return new User("tom",18);
    }
}
