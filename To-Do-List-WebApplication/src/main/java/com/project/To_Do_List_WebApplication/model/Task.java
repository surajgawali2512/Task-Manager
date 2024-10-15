package com.project.To_Do_List_WebApplication.model;

import jakarta.annotation.Generated;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Task {
	
	  @Id
	  @GeneratedValue(strategy = GenerationType.IDENTITY)
      private int empId;
      private String task;
      private boolean status;
      
      public Task() {
		// TODO Auto-generated constructor stub
	}

	public Task(int empId, String task, boolean status) {
		super();
		this.empId = empId;
		this.task = task;
		this.status = status;
	}

	public int getEmpId() {
		return empId;
	}

	public void setEmpId(int empId) {
		this.empId = empId;
	}

	public String getTask() {
		return task;
	}

	public void setTask(String task) {
		this.task = task;
	}

	public boolean isStatus() {
		return status;
	}

	public void setStatus(boolean status) {
		this.status = status;
	}

	@Override
	public String toString() {
		return "Task [empId=" + empId + ", task=" + task + ", status=" + status + "]";
	}
      
      
      
      
}
