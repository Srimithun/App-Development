package com.srimithun.digitaldining.service.impl;

import java.util.List;

import com.srimithun.digitaldining.dto.response.UserResponseDto;
import com.srimithun.digitaldining.model.User;
import com.srimithun.digitaldining.repository.UserRepository;
import com.srimithun.digitaldining.service.UserService;
import org.springframework.stereotype.Service;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;

@Service
@Transactional
@RequiredArgsConstructor
public class UserServiceimpl implements UserService {

    private final UserRepository userRepo;

    @Override
    public UserResponseDto getAllUser() {
       
        List<User> userList = userRepo.findAll();
        UserResponseDto userResponse = new UserResponseDto();
        userResponse.setUsers(userList);
        return userResponse;
        
    }
    
}
