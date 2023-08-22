package com.atstudy.service.impl;

import com.atstudy.dao.UserDao;
import com.atstudy.domain.User;
import com.atstudy.service.UserService;
import lombok.Data;

@Data
public class UserServiceImpl implements UserService {
    private UserDao userDao;
    public User findById() {
        return null;
    }
}
