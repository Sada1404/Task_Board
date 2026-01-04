from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List
import uuid

app = FastAPI(title="Task Board API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# --------- Models ---------
class Task(BaseModel):
    id: str
    title: str
    completed: bool = False

class CreateTask(BaseModel):
    title: str

# --------- In-memory storage ---------
tasks: List[Task] = []

# --------- Routes ---------
@app.get("/tasks", response_model=List[Task])
def list_tasks():
    return tasks

@app.post("/tasks", response_model=Task)
def add_task(payload: CreateTask):
    task = Task(
        id=str(uuid.uuid4()),
        title=payload.title,
        completed=False
    )
    tasks.append(task)
    return task

@app.patch("/tasks/{task_id}")
def toggle_task(task_id: str):
    for task in tasks:
        if task.id == task_id:
            task.completed = not task.completed
            return task
    return {"error": "Task not found"}

@app.delete("/tasks/{task_id}")
def delete_task(task_id: str):
    global tasks
    tasks = [task for task in tasks if task.id != task_id]
    return {"status": "deleted"}
