import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../../redux/actions/auth.action';
import "./_loginScreen.scss";

function LoginScreen() {
  const dispatch = useDispatch();

  const accessToken = useSelector((state) => state.auth.accessToken)
  const handleLogin = () => {
    dispatch(login())
  }

  const navigate = useNavigate()
  useEffect(() => {
    if (accessToken) {
      navigate("/")
    }
  }, [accessToken, navigate])
  
  return (
    <div className="login">
      <div className="login__container">
        <img src="https://cdn.pixabay.com/photo/2016/11/19/03/08/youtube-1837872__340.png" alt="logo" />
        <button onClick={handleLogin}>Login width google</button>
        <p>This Projects is made using YOUTUBE DATA API</p>
      </div>
    </div>
  )
}

export default LoginScreen