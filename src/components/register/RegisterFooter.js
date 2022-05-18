import CustomPrimaryButton from 'components/shared/CustomPrimaryButton';
import RedirectInfo from 'components/shared/RedirectInfo';
import { useNavigate } from 'react-router-dom';
import { Tooltip } from '@mui/material';

const RegisterFooter = ({ handleRegister, isFormValid }) => {
  const navigate = useNavigate();

  const handlePushLoginPage = () => navigate('/login');

  const getFormNotValidMessage = () =>
    'Enter a valid email and username should be between 3 and 12 characters and password should between 6 and 12 characters';

  const getFormValidMessage = () => 'Press to Register!';

  return (
    <>
      <Tooltip
        title={!isFormValid ? getFormNotValidMessage() : getFormValidMessage()}
      >
        <div>
          <CustomPrimaryButton
            label={'Register'}
            additionalStyles={{ marginTop: '30px' }}
            disabled={!isFormValid}
            onClick={handleRegister}
          />
        </div>
      </Tooltip>
      <RedirectInfo
        text={'Already have an account?'}
        redirectText="Login"
        additionalStyles={{ marginTop: '5px' }}
        redirectHandler={handlePushLoginPage}
      />
    </>
  );
};

export default RegisterFooter;
