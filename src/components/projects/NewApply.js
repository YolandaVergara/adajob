import React, { Fragment, useState } from 'react';

const NewProject = () => {

  //State para las solicitues
  const [project, saveProject] = useState({
    name: ''
  });
  //Destructuring para el nombre de las solicitudes
  const { name } = project;


  // Lee los conendos del imput
  const onChangeProject = ev => {
    saveProject({
      ...project,
      [ev.target.name]: ev.target.value
    })
  }

  const onSubmitApply = ev => {
    ev.preventDefault();
  }


  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-block btn-primary">
        Nueva Solicitud
        </button>
      <form className="form-new-project"
        onSumbmit={onSubmitApply}>
        <input type="text" className="input-text" placeholder="Nombre Empresa" name="name" value={name}
          onChange={onChangeProject} />
        <input type="submit" className="btn btn-block btn-primary" value="Añadir solicitud nueva" />
      </form>
    </Fragment>
  );
}
export default NewProject;