# Task Board - Full Stack Task Management App

A modern, full-stack task management application built with **React** and **FastAPI** featuring a unique **Focus Mode** for distraction-free productivity.

## Features

### Core Functionality
- **Add Tasks** - Create new tasks with a clean input interface
- **Complete Tasks** - Mark tasks as done with visual feedback
- **Delete Tasks** - Remove tasks you no longer need
- **Real-time Progress Tracking** - Dynamic progress bar showing completion percentage
- **Keyboard Support** - Press Enter to quickly add tasks

### Unique Feature: Focus Mode
- **Dark Theme Transformation** - Beautiful gradient dark mode for reduced eye strain
- **Auto-hide Completed Tasks** - Automatically filters out completed tasks to help you focus on what matters
- **Distraction-free Interface** - Perfect for deep work sessions
- **One-click Toggle** - Easy switching between normal and focus modes

### UI/UX Highlights
- Smooth animations and transitions
- Gradient backgrounds with glassmorphism effects
- Responsive design for all screen sizes
- Hover states and micro-interactions
- Clean, modern aesthetic using custom CSS

## Tech Stack

### Backend
- **FastAPI** - Modern, fast Python web framework
- **Pydantic** - Data validation using Python type annotations
- **Uvicorn** - Lightning-fast ASGI server
- **UUID** - Unique task ID generation

### Frontend
- **React 18** - Component-based UI library
- **Axios** - Promise-based HTTP client
- **Lucide React** - Beautiful icon library
- **Custom CSS** - Handcrafted styles with animations

## Getting Started

### Prerequisites
- Python 3.8 or higher
- Node.js 14 or higher
- npm or yarn

### Installation & Setup

#### 1. Clone the Repository
```bash
git clone https://github.com/Sada1404/Task_Board.git
cd Task_Board
```

#### 2. Backend Setup
```bash
# Navigate to backend directory
cd backend

# Install Python dependencies
pip install -r requirements.txt

# Start the FastAPI server
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

The backend will be running at `http://localhost:8000`

#### 3. Frontend Setup
Open a new terminal:
```bash
# Navigate to frontend directory
cd frontend

# Install Node dependencies
npm install

# Start the React development server
npm start
```

The frontend will be running at `http://localhost:3000`

## API Endpoints

### Base URL: `http://localhost:8000`

### Example Requests

**Create a Task:**
```bash
curl -X POST "http://localhost:8000/tasks" \
  -H "Content-Type: application/json" \
  -d '{"title": "Complete assignment"}'
```

**Get All Tasks:**
```bash
curl http://localhost:8000/tasks
```

## Features Breakdown

### Task Management
- **In-memory Storage**: Tasks persist during runtime
- **UUID Generation**: Each task gets a unique identifier
- **Type-safe Models**: Pydantic models ensure data integrity

### Progress Tracking
- Real-time calculation of completion percentage
- Visual progress bar with smooth animations
- Task count display (completed/total)

### Focus Mode
- Toggle between normal and focus modes
- Dark theme with custom gradients
- Completed tasks automatically hidden
- Enhanced visual hierarchy for better focus

## Code Quality

- **Clean Architecture**: Separation of concerns between backend and frontend
- **RESTful Design**: Well-structured API endpoints
- **Type Safety**: Pydantic models for data validation
- **React Best Practices**: Functional components with hooks
- **Error Handling**: Proper try-catch blocks for API calls
- **Responsive Design**: Works on desktop, tablet, and mobile

## Configuration

### CORS Settings
The backend is configured to allow requests from any origin during development. For production, update the CORS middleware in `backend/main.py`:
```python
app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://your-frontend-domain.com"],
    allow_methods=["*"],
    allow_headers=["*"],
)
```

### API URL
Update the API URL in `frontend/src/App.js` if deploying to production:
```javascript
const API_URL = 'https://your-backend-domain.com';
```

## Deployment

### Backend (FastAPI)
- Deploy to platforms like Heroku, Railway, or Render
- Ensure Python 3.8+ is available
- Set environment variables as needed

### Frontend (React)
- Build for production: `npm run build`
- Deploy to Vercel, Netlify, or GitHub Pages
- Update API_URL to point to deployed backend

## Assignment Requirements Checklist

- Python backend with FastAPI
- RESTful API endpoints (Add, List, Complete, Delete)
- React frontend with clean UI
- Task input box and Add button
- Task list with checkboxes and delete buttons
- Progress indicator (percentage + bar)
- In-memory storage (runtime persistence)
- Clean, structured, Pythonic code
- Fully functional from preview link
- **Unique Feature**: Focus Mode with auto-hide completed tasks

## What Makes This Stand Out

1. **Focus Mode Innovation**: Not just a visual toggle - it intelligently filters tasks to enhance productivity
2. **Polished UI/UX**: Professional-grade animations and transitions
3. **Attention to Detail**: Keyboard shortcuts, hover effects, smooth state transitions
4. **Clean Code**: Well-organized, commented, and following best practices
5. **User-Centric Design**: Features that actually solve real productivity challenges

## Developer

**Shantanu Sadafale**
- GitHub: [@Sada1404](https://github.com/Sada1404)
- LinkedIn: [Shantanu Sadafale](https://www.linkedin.com/in/shantanu-sadafale-315338232/)

## License

This project was created as part of a coding assignment for Vibe/Fluid AI.

## Acknowledgments

- Assignment provided by Vibe/Fluid AI
- Icons by Lucide React
- Inspired by modern task management tools

---

**Built in 60 minutes** | **Designed for productivity** | **Focused on user experience**