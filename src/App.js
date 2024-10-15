
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import AddTask from './components/AddTask';
import DeleteTask from './components/DeleteTask';
import UpdateTask from './components/UpdateTask';
import ViewTask from './components/ViewTask';
import UpdateTaskById from './components/UpdateTaskById';
function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/add-task">Add Task</Link></li>
            <li><Link to="/delete-task">Delete Task</Link></li>
            <li><Link to="/update-task">Update Task</Link></li>
            <li><Link to="/view-task">View Task</Link></li>
          </ul>
        </nav>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-task" element={<AddTask />} />
          <Route path="/delete-task" element={<DeleteTask />} />
          <Route path="/update-task" element={<UpdateTask />} />
          <Route path="/view-task" element={<ViewTask />} />
          <Route path="/update-taskbyId/:empId" element={<UpdateTaskById />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
