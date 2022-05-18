import CustomPrimaryButton from 'components/shared/CustomPrimaryButton';
import RedirectInfo from 'components/shared/RedirectInfo';
import { useNavigate } from 'react-router-dom';
import { Tooltip } from '@mui/material';

const LoginFooter = ({ handleLogin, isFormValid }) => {
  const navigate = useNavigate();

  const handlePushRegisterPage = () => navigate('/register');

  const getFormNotValidMessage = () =>
    'Enter a valid email and password should between 6 and 12 characters';

  const getFormValidMessage = () => 'Press to Log in!';

  return (
    <>
      <Tooltip
        title={!isFormValid ? getFormNotValidMessage() : getFormValidMessage()}
      >
        <div>
          <CustomPrimaryButton
            label={'Log in'}
            additionalStyles={{ marginTop: '30px' }}
            disabled={!isFormValid}
            onClick={handleLogin}
          />
        </div>
      </Tooltip>
      <RedirectInfo
        text={'Need an account?'}
        redirectText="Create an account"
        additionalStyles={{ marginTop: '5px' }}
        redirectHandler={handlePushRegisterPage}
      />
    </>
  );
};

export default LoginFooter;
