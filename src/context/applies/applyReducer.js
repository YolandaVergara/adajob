import {
  FORM_APPLY,
  GET_APPLIES,
  ADD_APPLY
} from '../../types';


export default (state, action) => {
  switch (action.type) {
    case FORM_APPLY:
      return {
        ...state,
        form: true
      }
    case GET_APPLIES:
      return {
        ...state,
        applies: action.payload
      }
    case ADD_APPLY:
      return {
        ...state,
        applies: [...state.applies, action.payload]
      }
    default:
      return state;
  }
}