import React, { Fragment, useState, useContext } from 'react';
import ProjectContext from '../../context/projects/projectContext';

const NewProject = () => {

  //Obtener el state 
  const projectContext = useContext(ProjectContext);
  const { form, showForm, addProject } = projectContext;

  //State para las solicitues
  const [project, saveProject] = useState({
    name: ''
  });
  //Destructuring para el nombre de las solicitudes
  const { name } = project;


  // Lee los conendos del input
  const onChangeProject = ev => {
    saveProject({
      ...project,
      [ev.target.name]: ev.target.value
    })
  }
//cuando el usuario envia una nueva solicitud
  const onSubmitApply = ev => {
    ev.preventDefault();
    if (name === '') {
      return;
    }
    addProject(project);
  }
   //Mostrar el formulario
   const onClickForm = () => {
     showForm();
   }

  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-block btn-primary"
        onClick={onClickForm}
      >
        Nueva Solicitud
        </button>
      {form
        ?
        (
          <form className="form-new-project"
            onSumbmit={onSubmitApply}>
            <input
              type="text" className="input-text" placeholder="Nombre Empresa" name="name"
              value={name}
              onChange={onChangeProject}
            />
            <input type="submit"
              className="btn btn-block btn-primary" value="Añadir solicitud nueva"
            />
          </form>
        ) : null
      }
    </Fragment>
  );
}
export default NewProject;