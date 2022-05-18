import RegisterFooter from 'components/register/RegisterFooter';
import RegisterHeader from 'components/register/RegisterHeader';
import RegisterInputs from 'components/register/RegisterInputs';
import AuthBox from 'components/shared/AuthBox';
import { useState } from 'react';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    console.log(username);
    console.log(email);
    console.log(password);
  };
  return (
    <AuthBox>
      <RegisterHeader />
      <RegisterInputs
        username={username}
        email={email}
        password={password}
        setUsername={setUsername}
        setEmail={setEmail}
        setPassword={setPassword}
      />
      <RegisterFooter
        isFormValid={username && email && password}
        handleRegister={handleRegister}
      />
    </AuthBox>
  );
};

export default Register;
