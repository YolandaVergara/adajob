import React, { Fragment, useState, useContext } from "react";
import ProjectContext from "../../context/applies/applyContext";

const NewApply = () => {
  //Obtener el state
  const projectContext = useContext(ProjectContext);
  const { form, showForm, addApply } = projectContext;

  //State para las solicitues
  const [apply, saveApply] = useState({
    name: ""
  });

  //Destructuring para el nombre de las solicitudes
  const { name } = apply;

  // Lee los contenidos del input
  const onChangeApply = ev => {

    saveApply({
      ...apply,
      [ev.target.name]: ev.target.value
    });
  };

  //cuando el usuario envia una nueva solicitud
  const onSubmitApply = ev => {
    console.log(ev)
    ev.preventDefault();
    if (name === "") {
      return;
    }
    addApply(apply);
    console.log(apply)
  };

  //Mostrar el formulario
  const onClickForm = () => {
    showForm();
  };

  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-block btn-primary"
        onClick={onClickForm}
      >
        Nueva Solicitud
      </button>
      {form ? (
        <form className="form-new-project" onSubmit={onSubmitApply}>
          <input
            type="text"
            className="input-text"
            placeholder="Nombre Empresa"
            name="name"
            value={name}
            onChange={onChangeApply}
          />
          <input
            type="submit"
            className="btn btn-block btn-primary"
            value="Añadir solicitud nueva"
          />
        </form>
      ) : null}
    </Fragment>
  );
};
export default NewApply;
