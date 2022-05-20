import RegisterFooter from 'components/register/RegisterFooter';
import RegisterHeader from 'components/register/RegisterHeader';
import RegisterInputs from 'components/register/RegisterInputs';
import AuthBox from 'components/shared/AuthBox';
import { useEffect, useState } from 'react';
import { validateRegisterForm } from 'utils/validators';
import { connect } from 'react-redux';
import { getActions } from 'store/actions/authActions';
import { useNavigate } from 'react-router-dom';

const Register = ({ register }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    setIsFormValid(validateRegisterForm({ email, password, username }));
  }, [email, password, username, setIsFormValid]);

  const handleRegister = (e) => {
    const userDetails = { username, email, password };
    register(userDetails);
    navigate('/dashboard');
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
        isFormValid={isFormValid}
        handleRegister={handleRegister}
      />
    </AuthBox>
  );
};

const mapActionsToProps = (dispatch) => {
  return {
    ...getActions(dispatch),
  };
};

export default connect(null, mapActionsToProps)(Register);
