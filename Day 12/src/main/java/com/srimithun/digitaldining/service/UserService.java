package com.srimithun.digitaldining.service;

import org.springframework.stereotype.Service;

import com.srimithun.digitaldining.dto.response.UserResponseDto;

@Service
public interface UserService {
    UserResponseDto getAllUser();
}
