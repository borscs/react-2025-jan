import ProjectSliderBar from "./Components/ProjectSliderBar.jsx";
import NewProject from "./Components/NewProject.jsx";
import {useState} from "react";
import NoProjectSelected from "./Components/NoProjectSelected.jsx";

function App() {
    
    const [projectsState, setProjectsState] = useState({
        setProjectId: undefined,
        projects: [],
    });
    
    function  handleStartAddProject() {
        setProjectsState((prevState) => {
            return {
                ...prevState,
                setProjectId: null,
            };
        });
    };
    
    let content;
    
    
    if(projectsState.setProjectId === null) {
        content = <NewProject/>
    }else if(projectsState.setProjectId === undefined) {
        content = <NoProjectSelected onStartAddProject={handleStartAddProject}/>
    }
    
  return (
   <main className="h-screen my-8 flex gap-8">
       <ProjectSliderBar onStartAddProject={handleStartAddProject} />
       {content}
   </main>
  );
}

export default App;
