import React, { useReducer } from 'react';
import uuid from 'uuid';
import applyContext from './applyContext';
import applyReducer from './applyReducer';
import {
  FORM_APPLY,
  GET_APPLIES,
  ADD_APPLY
} from '../../types';




const ApplyState = props => {

  const applies = [
    { id: 1, name: 'Empresa 1' },
    { id: 2, name: 'Empresa 2' },
    { id: 3, name: 'Empresa 3' },
    { id: 4, name: 'Empresa 4' }
  ];

  const initialState = {
    applies: [],
    form: false
  }
  //dispatch para ejecutar las acciones
  const [state, dispatch] = useReducer(applyReducer, initialState);
  
  //Funciones para el CRUD
  const showForm = () => {
    dispatch({
      type: FORM_APPLY
    })
  }

  const getApplies = () => {
    dispatch({
      type: GET_APPLIES,
      payload: applies
    })
  }

  const addApply = apply => {
    // coge el proyecto y le asigna un id unico
    apply.id = uuid.v4();

    //Inserta el proyecto en el state con el dispatch
    dispatch({
      type: ADD_APPLY,
      payload: apply
    })
  }
  return (
    <applyContext.Provider
      value={{
        applies: state.applies,
        form: state.form,
        showForm,
        getApplies,
        addApply
      }}>
      {props.children}
    </applyContext.Provider>
  )
}
export default ApplyState;
