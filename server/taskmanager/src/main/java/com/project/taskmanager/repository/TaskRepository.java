package com.project.taskmanager.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.taskmanager.model.Task;



public interface TaskRepository extends JpaRepository<Task, Integer>{

	
}
