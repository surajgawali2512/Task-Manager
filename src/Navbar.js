import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddTask from './components/AddTask';
import DeleteTask from './components/DeleteTask';
import UpdateTask from './components/UpdateTask';
import ViewTasks from './components/ViewTask';
import Login from './components/Login';
import Home from './components/Home';
import './Navbar.css'; 

function Navbar() {
    return (
        <Router>
            <div>
                <nav className="navbar-container">
                    <div className="navbar-links">
                        <a href="/" className="navbar-link">Home</a>
                        <a href="/add-task" className="navbar-link">Add Task</a>
                        <a href="/delete-task" className="navbar-link">Delete Task</a>
                        <a href="/update-task" className="navbar-link">Update Task</a>
                        <a href="/view-tasks" className="navbar-link">View Task</a>
                        <a href="/login" className="navbar-link">Login</a>
                    </div>
                </nav>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/add-task" element={<AddTask />} />
                    <Route path="/delete-task" element={<DeleteTask />} />
                    <Route path="/update-task" element={<UpdateTask />} />
                    <Route path="/view-tasks" element={<ViewTasks />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </div>
        </Router>
    );
}

export default Navbar;
