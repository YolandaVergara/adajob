import React, { useReducer } from 'react';
import uuid from 'uuid';
import projectContext from './projectContext';
import projectReducer from './projectReducer';
import {
  FORM_PROJECT,
  GET_PROJECTS,
  ADD_PROJECT
} from '../../types/Index';




const ProjectState = props => {

  const projects = [
    { id: 1, name: 'Empresa 1' },
    { id: 2, name: 'Empresa 2' },
    { id: 3, name: 'Empresa 3' },
    { id: 4, name: 'Empresa 4' }
  ];

  const initialState = {
    projects: [],
    form: false
  }
  //dispatch para ejecutar las acciones
  const [state, dispatch] = useReducer(projectReducer, initialState);

  //Funciones para el CRUD
  const showForm = () => {
    dispatch({
      type: FORM_PROJECT
    })
  }

  const getProjects = () => {
    dispatch({
      type: GET_PROJECTS,
      payload: projects
    })
  }

  const addProject = project => {
    // coge el proyecto y le asigna un id unico
    project.id = uuid.v4();

    //Inserta el proyecto en el state con el dispatch
    dispatch({
      type: ADD_PROJECT,
      payload: project
    })
  }
  return (
    <projectContext.Provider
      value={{
        projects: state.projects,
        form: state.form,
        showForm,
        getProjects,
        addProject
      }}>
      {props.children}
    </projectContext.Provider>
  )
}
export default ProjectState;
