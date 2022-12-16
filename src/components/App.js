import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const tasksToDisplay = tasks.filter((task) => {
    if (selectedCategory === "All") return true;
    return task.category === selectedCategory;
  });

  function handleDelete(deletedTaskText) {
    const updatedTasks = tasks.filter((task) => task.text !== deletedTaskText);
    setTasks(updatedTasks);
  }

  function onTaskFormSubmit(newTask) {
    setTasks([...tasks, newTask]);
  }

  console.log(selectedCategory);
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        setSelectedCategory={setSelectedCategory}
      />
      <NewTaskForm
        categories={CATEGORIES}
        onTaskFormSubmit={onTaskFormSubmit}
      />
      <TaskList tasks={tasksToDisplay} onDeleteTask={handleDelete} />
    </div>
  );
}

export default App;
