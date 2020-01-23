import React, { useState } from 'react';
import { Link } from 'react-router-dom';



const NewAccount = () => {

  const [user, saveUser] = useState({
    name: '',
    email: '',
    password: '',
    confirm: ''
  });

  const { name, email, password, confirm } = user;

  const onChange = (ev) => {
    saveUser({
      ...user,
      [ev.target.name]: ev.target.value
    })
  }

  const onSubmit = ev => {
    ev.preventDefault();
  }


  return (
    <div className="form-user">
      <div className="container-form">
        <h1>Crea tu cuenta</h1>
        <form
          onSubmit={onSubmit}
        >
            <div className="campo-form">
            <label htmlFor="name"> Nombre </label>
            <input type="text"
              id="name"
              name="name"
              value={name}
              placeholder="Tu Nombre"
              onChange={onChange} />
          </div>
          <div className="campo-form">
            <label htmlFor="email"> Email </label>
            <input type="email"
              id="email"
              name="email"
              value={email}
              placeholder="Tu Email"
              onChange={onChange} />
          </div>

          <div className="campo-form">
            <label htmlFor="email"> Password </label>
            <input type="password"
              id="password"
              name="password"
              value={password}
              placeholder="Tu Password"
              onChange={onChange} />
          </div>
          <div className="campo-form">
            <label htmlFor="email"> Repite el Password </label>
            <input type="password"
              id="confirm"
              name="confirm"
              value={confirm}
              placeholder="Repite tu Password"
              onChange={onChange} />
          </div>
          <div className="campo-form">
            <input
              type="submit"
              className="btn btn-primary btn-block"
              value="Registrarme"
            />
          </div>

        </form>
      <Link to={'/'} className="link-account">
        Volver a iniciar sesión
      </Link>
      </div>
    </div>

  );
}

export default NewAccount;