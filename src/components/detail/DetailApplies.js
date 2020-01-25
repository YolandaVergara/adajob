import React, { Fragment } from 'react';
import EditApply from './EditApply';
import Table from 'react-bootstrap/Table'


const DetailApplies = () => {
  const applies = [
    {
      name: 'Nombre',
      contact: 'Contacto',
      date: 'Fecha',
      contactPath: 'Medio de contacto',
      message: 'Mensaje enviado',
      notes: 'Notas',
    },
    {
      name: 'Empresa 1',
      contact: 'Contacto 1',
      date: '18/01/2020',
      contactPath: 'Linkedin',
      message: 'Quiero trabajar con vosotros!',
      notes: 'Me llamarán pronto',
    },
    {
      name: 'Empresa 2',
      contact: 'Contacto 2',
      date: '18/01/2020',
      contactPath: 'Mail',
      message: 'Quiero trabajar con vosotros!',
      notes: 'Me llamarán pronto',
    },
    {
      name: 'Empresa 3',
      contact: 'Contacto 3',
      date: '18/01/2020',
      contactPath: 'Teléfono',
      message: 'Quiero trabajar con vosotros!',
      notes: 'Me llamarán pronto',
    },

  ]
  return (
    <Fragment>
      <h1 className="p-5">Detalle de solicitudes</h1>
      <Table striped className="justify-content-center font">


        {applies.length === 0
          ? (<th>No hay solicitudes</th>)
          :
          applies.map(apply => (
            <tr>
              <EditApply
                apply={apply}
              />
            </tr>
          ))
        }

      </Table>
      {/* <button
        type="button"
        className="btn btn-delete"
      >Eliminar solicitud</button> */}

    </Fragment>

  );
}
export default DetailApplies;