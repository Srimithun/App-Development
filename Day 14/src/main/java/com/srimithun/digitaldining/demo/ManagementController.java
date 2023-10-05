package com.srimithun.digitaldining.demo;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;



@RestController
@RequestMapping("/api/v1/employee")

public class ManagementController {
     @GetMapping
    public String get(){
        return "Get:: employee controller";
    }
    @PostMapping
    public String post(){
        return "Post:: employee controller";
    }

    @PutMapping
    public String update(){
        return "Put:: employee controller";
    }
    @DeleteMapping
    public String delete(){
        return "Delete:: employee controller";
    }
}
