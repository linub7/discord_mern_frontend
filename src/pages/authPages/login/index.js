import LoginFooter from 'components/login/LoginFooter';
import LoginHeader from 'components/login/LoginHeader';
import LoginInputs from 'components/login/LoginInputs';
import AuthBox from 'components/shared/AuthBox';
import { validateLoginForm } from 'utils/validators';
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getActions } from 'store/actions/authActions';
import { useNavigate } from 'react-router-dom';

const Login = ({ login }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsFormValid(validateLoginForm({ email, password }));
  }, [email, password, setIsFormValid]);

  const handleLogin = () => {
    const userDetails = { email, password };
    login(userDetails);
    navigate('/dashboard');
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
      <LoginFooter isFormValid={isFormValid} handleLogin={handleLogin} />
    </AuthBox>
  );
};

const mapActionsToProps = (dispatch) => {
  return {
    ...getActions(dispatch),
  };
};

export default connect(null, mapActionsToProps)(Login);
