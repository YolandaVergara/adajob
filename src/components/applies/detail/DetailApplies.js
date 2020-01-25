import React, { Fragment } from 'react';
import DetailApply from './DetailApply';


const DetailApplies = () => {
  const applies = [
    {
      name: 'Nombre',
      contact: 'Contacto',
      date: 'Fecha',
      contactPath: 'Medio de contacto',
      message: 'Mensaje enviado',
      notes: 'Notas',
      state: true
    },
    {
      name: 'Empresa 1',
      contact: 'Contacto 1',
      date: '18/01/2020',
      contactPath: 'Linkedin',
      message: 'Quiero trabajar con vosotros!',
      notes: 'Me llamarán pronto',
      state: true
    },
    {
      name: 'Empresa 2',
      contact: 'Contacto 2',
      date: '18/01/2020',
      contactPath: 'Mail',
      message: 'Quiero trabajar con vosotros!',
      notes: 'Me llamarán pronto',
      state: false
    },
    {
      name: 'Empresa 3',
      contact: 'Contacto 3',
      date: '18/01/2020',
      contactPath: 'Teléfono',
      message: 'Quiero trabajar con vosotros!',
      notes: 'Me llamarán pronto',
      state: true
    },

  ]
  return (
    <Fragment>
      <h1 className="p-5">Detalle de solicitudes</h1>
      <h2>Proyecto: </h2>
      <div className="input-group bg-light d-flex rounded m-5 p-3 w-75 flex-column">
        <ul>
          {applies.lenght === 0
            ? (<li className="task">No hay tareas</li>)
            : applies.map((apply, key) => (
              <DetailApply
                key={key}
                apply={apply}
              />
            ))
          }
        </ul>
      </div>
      {/* <button
        type="button"
        className="btn btn-delete"
      >Eliminar solicitud</button> */}

    </Fragment>

  );
}
export default DetailApplies;