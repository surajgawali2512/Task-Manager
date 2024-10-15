package com.project.To_Do_List_WebApplication.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.To_Do_List_WebApplication.exceptions.TaskNotFoundException;
import com.project.To_Do_List_WebApplication.model.Task;
import com.project.To_Do_List_WebApplication.repository.TaskRepository;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class TaskService {
           
	@Autowired
	private TaskRepository taskRepository;
	   
	public List<Task> getAllTasks(){
		return taskRepository.findAll();
		
	}
	
	public Optional<Task>getTaskById(int id){
		Optional<Task>task=taskRepository.findById(id);
		int empId=task.get().getEmpId();
		if(empId==id) {
			return task;
		}
		else {
		throw new TaskNotFoundException("Task with id " + id + " not found.");
	
		}
	}
	
	public void addTask(Task task) {
		taskRepository.save(task);
	}
	public void updateTask(int id,Task task) {
		List<Task>taskList=getAllTasks();
		for(int i=0;i<taskList.size();i++) {
			Task taskData=taskList.get(i);
			if(taskData.getEmpId()==id) {
				taskRepository.save(task);
			}
		}
	}
	
	public void deleteTask(int id) {
		Optional<Task> task=getTaskById(id);
		int empId=task.get().getEmpId();
		if(empId==id)
		{
		    taskRepository.deleteById(id);
		}
		else
		{
			throw new TaskNotFoundException("Item with id " + id + " not found.");
		}

	}
	
}
