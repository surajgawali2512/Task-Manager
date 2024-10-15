package com.project.To_Do_List_WebApplication.controller;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.To_Do_List_WebApplication.model.Task;
import com.project.To_Do_List_WebApplication.service.TaskService;

@RestController
@RequestMapping("/task")
@CrossOrigin(origins = "http://localhost:3000")
public class TaskController {
  @Autowired TaskService taskService;
  
  @GetMapping("/getAllTasks")
	public List<Task> getAllTasks() {
		return taskService.getAllTasks();
	}

	@GetMapping("/{id}")
	public Optional<Task>getTaskById(@PathVariable int id) {
		return taskService.getTaskById(id);
	}

	@PostMapping("/addTasks")
	public void addTask(@Validated @RequestBody Task task) {
		System.out.println(task);
		taskService.addTask(task);
	}

	@PutMapping("/{id}")
	public void updateTask(@PathVariable int id, @RequestBody Task task) {
		taskService.updateTask(id, task);
	}

	@DeleteMapping("/deleteTaskById/{id}")
	public void deleteTask(@PathVariable int id) {
	    taskService.deleteTask(id);
	}


}
