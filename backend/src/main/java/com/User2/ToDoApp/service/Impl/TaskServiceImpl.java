package com.User2.ToDoApp.service.Impl;

import com.User2.ToDoApp.repo.TaskRepository;
import com.User2.ToDoApp.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TaskServiceImpl implements TaskService {

    @Autowired
    private TaskRepository taskRepository;



}
