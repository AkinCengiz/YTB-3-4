import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react'
import axios from "axios"

const ProjectContext = createContext();
const apiUrl = "http://localhost:3000/project";
function ProjectContextProvider({children}) {
    const [projects,setProjects] = useState([]);

    const getProjects = async() => {
        const response = await axios.get(apiUrl);
        setProjects(response.data)
    }
    const values = {
        projects,
        setProjects
    }
    useEffect(() => {
      getProjects();  
    },[])
  return (
    <ProjectContext.Provider value={values}>
        {children}
    </ProjectContext.Provider>
  )
}

export {ProjectContext,ProjectContextProvider }