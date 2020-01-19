import React, {Fragment} from 'react';

const NewProject = () => {
    return (
        <Fragment>
        <button
            type="button"
            className="btn btn-block btn-primary">
            Nueva Solicitud
        </button>
        <form className="form-new-project">
            <input type="text" type="text" className="input-text" placeholder="Nombre Empresa" name="name" />
            <input type="submit" className="btn btn-block btn-primary" value="add apply" />
        </form>

        </Fragment>
    );
}
export default NewProject;