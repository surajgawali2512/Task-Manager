import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';  

function Home() {
  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to the Task Management System</h1>
    
      
      <div className="home-buttons">
        <Link to="/add-task" className="home-button">Add Task</Link>
        <Link to="/view-task" className="home-button">View Tasks</Link>
        <Link to="/update-task" className="home-button">Update Task</Link>
        <Link to="/delete-task" className="home-button">Delete Task</Link>
      </div>
      
      <footer className="home-footer">
        <p>Explore the system and efficiently manage your collection.</p>
      </footer>
    </div>
  );
}

export default Home;
