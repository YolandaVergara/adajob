import React from 'react';

const FormApply = () => {

  return (
    <div className="formulario mb-5">
      <form>
        <div className="container-input">
          <input
            type="text"
            className="input-text"
            placedholder="Nombre Contacto"
            name="contact"
          />
        </div>
        <div className="container-input">
          <input
            type="submit"
            className="btn btn-primary btn-submit btn-block"
            value="Agregar datos" />
        </div>
      </form>
    </div>
  );
}

export default FormApply;