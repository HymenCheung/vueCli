package com.atstudy.controller;

import com.atstudy.domain.User;
import com.atstudy.service.UserService;
import com.atstudy.service.impl.UserServiceImpl;
import lombok.Getter;
import lombok.Setter;

public class UserController {
    @Getter
    @Setter
    private UserService userService;
    User findById(){
        return userService.findById();
    }
}
