package com.User2.ToDoApp.Security.config;

import com.User2.ToDoApp.service.UserService;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.core.userdetails.UserDetailsService;

@Configuration
@RequiredArgsConstructor
@EnableWebSecurity
public class WebSecurityConfig  {

    private final UserDetailsService userDetailsService;
    private final JwtFilter;

}
