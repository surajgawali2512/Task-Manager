package com.project.To_Do_List_WebApplication.exceptions;

public class TaskNotFoundException extends RuntimeException {
       public TaskNotFoundException(String message) {
    	   super(message);
       }
}
