import React, {useState} from 'react';
import logo from '../../assets/logo.png'
import MaterialInput from "../../components/input/MaterialInput";
import './login.css'
import MaterialButton from "../../components/button/MaterialButton";
import axios from "axios";

const Login = () => {

  const [error, setError] = useState('')
  const [userInfo, setUserInfo] = useState({})
  const [user, setUser] = useState({
    username: '',
    password: ''
  })
  async function Auth () {
    try {
      const response = await axios.post('https://codify-teens.vercel.app/login', user)
      setError('')
      setUserInfo(response.data.user)
    } catch (e) {
      if (e.response.status === 401) {
        setError('Неверный логин и пароль')
        setUserInfo({})
      }
    }
  }

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
            onChange={ (e) => setUser({...user, username: e.target.value}) }
          />
          <MaterialInput
            label='Пароль'
            type='password'
            onChange={ (e) => setUser({...user, password: e.target.value}) }
          />
          <MaterialButton
            value='Войти'
            onClick={Auth}
          />

        </div>

        <div className="result">
         <div>
           {error}
         </div>

          <div>
            <p>{userInfo?.fullName}</p>
            <p>{userInfo?.job}</p>
            <p>{userInfo?.city}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

