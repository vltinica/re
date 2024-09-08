import React from "react";
import { useState } from "react";
import ProjectsSidebar from "./components/ProjectsSidebar";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";



function App() {

const [projectsState, setProjectsState] = useState({
  selectedProject: undefined,
  projects: []
})

function handleStartAddProject() {
  setProjectsState(prevState => {
    return {
      ...prevState,
      selectedProjectId: null,
    }
  })
}

function handleCancelAddProject() {
  setProjectsState(prevState => {
    return {
      ...prevState,
      selectedProjectId: undefined,
    }
  })
}

function handleAddProject(projectData) {
  setProjectsState((prevState) => {
    const projectId = Math.random();
    const newProject = {
      ...projectData,
      id: Math.random()
    }
    return({
      ...prevState,
      selectedProjectId: undefined,
      projects: [...prevState.projects, newProject]
    })
  })
}



let content;

if (projectsState.selectedProjectId === null) {
  content = <NewProject onAdd={handleAddProject}  onCancel={handleCancelAddProject} />
}else if(projectsState.selectedProjectId === undefined) {
  content = <NoProjectSelected onStartAddProject={handleStartAddProject} />
}

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar onStartAddProject={handleStartAddProject}  projects={projectsState.projects} />  
      {content}
    </main>
  );
}

export default App;
