import React, { useState } from 'react';
import { Link } from 'react-router-dom';



const Login = () => {

  const [user, saveUser] = useState({
    email: '',
    password: ''
  });

  const { email, password } = user;

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
        <h1>Iniciar Sesión</h1>
        <form
          onSubmit={onSubmit}
        >
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
            <input
              type="submit"
              className="btn btn-primary btn-block"
              value="Iniciar Sesión"
            />
          </div>

        </form>
      <Link to={'/NewAccount'} className="link-account">
        Regístrate
      </Link>
      </div>
    </div>

  );
}

export default Login;