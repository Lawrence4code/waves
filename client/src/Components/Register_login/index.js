import React from 'react';

import MyButton from '../utils/button';
import Login from './login';

const RegisterLogin = () => {
  return (
    <div className="page_wrapper">
      <div className="container">
        <div className="register_login_container">
          <div className="left">
            <h1> A new customers </h1>
            <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum, soluta vero error est facilis doloribus aperiam libero natus. Obcaecati, tenetur similique.</p>
            <MyButton type="default" title="Create an account" linkTo="/register" addStyles={{
              margin: "10px 0 0 0 "
            }} />
          </div>
          <div className="right">
            <h2> Registered Customer </h2>
            <p> If you already have an account, please log in.</p>
            <Login />
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegisterLogin;