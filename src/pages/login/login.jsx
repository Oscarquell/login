import React, {useState} from 'react';
import logo from '../../assets/logo.png'
import MaterialInput from "../../components/input/MaterialInput";
import './login.css'
import MaterialButton from "../../components/button/MaterialButton";

const Login = () => {

  const [username, setUsername] = useState('')
  console.log(username)

  return (
    <div className='login-wrap'>
      <div className='login-block'>
        <div className="logo-block">
          <img src={logo} alt="logo"/>
        </div>
        <div className="inputs-block">
          <MaterialInput
            label='Логин'
            type='text'
            onChange={ (event) => setUsername(event.target.value) }
          />
          <MaterialInput
            label='Пароль'
            type='password'
          />
          <MaterialButton
            value='Отправить'
            onClick={() => console.log('Click')}
          />

        </div>
      </div>
    </div>
  );
};

export default Login;