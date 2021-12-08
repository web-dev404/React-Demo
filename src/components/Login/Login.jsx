import {Form, Field} from 'react-final-form';
import s from './Login.module.css';
import Input from "./Input";
import React from "react";
import {Redirect} from "react-router-dom";

const Login = ({onSubmit, required, isAuth}) => {
    return (
        <div>
            <h1>Login</h1>

            <LoginForm onSubmit={onSubmit} required={required} isAuth={isAuth} />
        </div>
    )
}

const LoginForm = ({isAuth, onSubmit, required}) => {
    if (isAuth) {
        return <Redirect to={'/profile'} />
    }
    return (
        <Form onSubmit={onSubmit}
              render={({handleSubmit}) => (
                  <form onSubmit={handleSubmit}>
                      <Field name="email" validate={required}>
                          {({input, meta}) => (
                              <div>
                                  <Input {...input} placeholder='Email' type='email'/>
                                  {meta.touched && meta.error && <div className={s.error}>{meta.error}</div>}
                              </div>
                          )}
                      </Field>

                      <Field name="password" validate={required}>
                          {({input, meta}) => (
                              <div>
                                  <Input {...input} placeholder='Password' type='password'/>
                                  {meta.touched && meta.error && <div className={s.error}>{meta.error}</div>}
                              </div>
                          )}
                      </Field>

                      <Field id='checkbox' component={'input'} name={'rememberMe'} type="checkbox"
                             placeholder='Password'/>
                      <label htmlFor="checkbox">Remember me</label>

                      <div>
                          <button>Login</button>
                      </div>
                  </form>
              )}
        />
    )
}

export default Login;