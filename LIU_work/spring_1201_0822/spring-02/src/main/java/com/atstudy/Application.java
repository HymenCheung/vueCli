package com.atstudy;

import com.atstudy.domain.User;
import com.atstudy.service.UserService;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Application {
    public static void main(String[] args) {
        //读取配置文件创建容器
        ClassPathXmlApplicationContext applicationContext = new ClassPathXmlApplicationContext("spring.xml");
        UserService userService = (UserService) applicationContext.getBean(User.class);
        User byId = userService.findById();


    }
}
