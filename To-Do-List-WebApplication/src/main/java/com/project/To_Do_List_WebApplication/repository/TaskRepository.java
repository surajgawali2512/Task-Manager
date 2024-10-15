package com.project.To_Do_List_WebApplication.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.To_Do_List_WebApplication.model.Task;

public interface TaskRepository  extends JpaRepository<Task, Integer>{

}
