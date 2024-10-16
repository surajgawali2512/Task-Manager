package com.project.taskmanager.model;



import jakarta.annotation.Generated;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;


@Entity
@Table(name="allTasks")
public class Task {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int empId;
	
	private String taskName;

	private boolean taskStatus;
	
public Task() {
	
}

public Task(int empId, String taskName, boolean taskStatus) {
	super();
	this.empId = empId;
	this.taskName = taskName;
	this.taskStatus = taskStatus;
}

public int getEmpId() {
	return empId;
}

public void setEmpId(int empId) {
	this.empId = empId;
}

public String getTaskName() {
	return taskName;
}

public void setTaskName(String taskName) {
	this.taskName = taskName;
}

public boolean isTaskStatus() {
	return taskStatus;
}

public void setTaskStatus(boolean taskStatus) {
	this.taskStatus = taskStatus;
}

@Override
public String toString() {
	return "Task [empId=" + empId + ", taskName=" + taskName + ", taskStatus=" + taskStatus + "]";
}

}