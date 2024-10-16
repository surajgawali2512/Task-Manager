package com.project.taskmanager.controller;

import java.util.List;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.project.taskmanager.model.Task;
import com.project.taskmanager.service.TaskService;



@RestController
@RequestMapping("/task")
@CrossOrigin(origins = "http://localhost:3000")
public class TaskController {

	@Autowired
	private TaskService taskService;


	
	
	
	
	
	
	
	
	
	
	
	
	

	@GetMapping("/getAllTasks")
	public List<Task> getAllTasks() {
		return taskService.getAllTasks();
	}

	@GetMapping("getTaskById/{id}")
	public Optional<Task> getTaskById(@PathVariable int id) {
		return taskService.getTaskById(id);
	}

	@PostMapping("/addTasks")
	public void addTask( @RequestBody Task task) {
		taskService.addTask(task);
	}

	@PutMapping("/updateTask/{id}")
	public void updateTask(@PathVariable int id, @RequestBody Task task) {
		taskService.updateTask(id, task);
	}

	@DeleteMapping("/deleteTaskById/{id}")
	public void deleteProduct(@PathVariable int id) {
	    taskService.deleteTask(id);
	}


}
