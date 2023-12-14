package com.chenzijin.weblog.web;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan({"com.chenzijin.*"}) // 多模块项目中，必需手动指定扫描 com.chenzijin 包下面的所有类
public class WeblogWebApplication {

    public static void main(String[] args) {
        SpringApplication.run(WeblogWebApplication.class, args);
        System.out.println("启动应用后点击 "+"http://localhost:8080/doc.html"+" 查看前后台接口");
        System.out.println("启动应用后点击 "+"http://localhost:8080/admin/test"+" 查看模拟登录界面，登录成功后返回参数，账号：admin,密码：123456");
    }

}
