package com.srimithun.digitaldining.repository;

import com.srimithun.digitaldining.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,String>{

   
    
}
