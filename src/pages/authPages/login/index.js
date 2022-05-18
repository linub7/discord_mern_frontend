import LoginFooter from 'components/login/LoginFooter';
import LoginHeader from 'components/login/LoginHeader';
import LoginInputs from 'components/login/LoginInputs';
import AuthBox from 'components/shared/AuthBox';
import { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(email);
    console.log(password);
  };
  return (
    <AuthBox>
      <LoginHeader />
      <LoginInputs
        email={email}
        password={password}
        setEmail={setEmail}
        setPassword={setPassword}
      />
      <LoginFooter isFormValid={email && password} handleLogin={handleLogin} />
    </AuthBox>
  );
};

export default Login;
