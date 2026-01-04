import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Plus, ClipboardCheck, Trash2, CheckCircle2, Circle, Target, Zap } from 'lucide-react';
import './App.css';

const API_URL = 'http://localhost:8000';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [focusMode, setFocusMode] = useState(false);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get(`${API_URL}/tasks`);
      setTasks(response.data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  const addTask = async () => {
    if (!newTask.trim()) return;

    try {
      const response = await axios.post(`${API_URL}/tasks`, {
        title: newTask
      });
      setTasks([...tasks, response.data]);
      setNewTask('');
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  const toggleTask = async (taskId) => {
    try {
      await axios.patch(`${API_URL}/tasks/${taskId}`);
      setTasks(tasks.map(task =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      ));
    } catch (error) {
      console.error('Error toggling task:', error);
    }
  };

  const deleteTask = async (taskId) => {
    try {
      await axios.delete(`${API_URL}/tasks/${taskId}`);
      setTasks(tasks.filter(task => task.id !== taskId));
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTask();
    }
  };

  const completedCount = tasks.filter(task => task.completed).length;
  const totalCount = tasks.length;
  const progressPercentage = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

  return (
    <div className={`app ${focusMode ? 'focus-mode' : ''}`}>
      <div className="container">
        <div className="header">
          <h1 className="title">
            <ClipboardCheck size={36} color="white" />{" "}
            Task Board</h1>
          <p className="subtitle">Stay organized, stay productive</p>
        </div>

        <div className="focus-toggle" onClick={() => setFocusMode(!focusMode)}>
          <Zap size={18} color="white" />
          <span>Focus Mode</span>
          <div className={`toggle-switch ${focusMode ? 'active' : ''}`}>
            <div className={`toggle-slider ${focusMode ? 'active' : ''}`}></div>
          </div>
        </div>

        <div className="card">
          <div className="progress-section">
            <div className="progress-label">
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Target size={18} />
                <span>Progress</span>
              </div>
              <span className="progress-percentage">{progressPercentage}%</span>
            </div>
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
            <div style={{ marginTop: '8px', fontSize: '14px', opacity: 0.7 }}>
              {completedCount} of {totalCount} tasks completed
            </div>
          </div>

          <div className="input-section">
            <input
              type="text"
              className="task-input"
              placeholder="What needs to be done?"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <button className="add-button" onClick={addTask}>
              <Plus size={20} />
              Add Task
            </button>
          </div>

          <div className="task-list">
            {tasks.length === 0 ? (
              <div className="empty-state">
                <div className="empty-icon">📋</div>
                <div className="empty-text">No tasks yet. Add one to get started!</div>
              </div>
            ) : (
              tasks
                .filter(task => !focusMode || !task.completed)
                .map((task) => (
                  <div
                    key={task.id}
                    className={`task-item ${task.completed ? 'completed' : ''}`}
                  >
                    <div
                      className={`checkbox ${task.completed ? 'checked' : ''}`}
                      onClick={() => toggleTask(task.id)}
                    >
                      {task.completed ? (
                        <CheckCircle2 size={16} color="white" />
                      ) : (
                        <Circle size={16} color="#d1d5db" />
                      )}
                    </div>
                    <span className={`task-text ${task.completed ? 'completed' : ''}`}>
                      {task.title}
                    </span>
                    <button
                      className="delete-button"
                      onClick={() => deleteTask(task.id)}
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;