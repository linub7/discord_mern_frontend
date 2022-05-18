import InputWithLabel from 'components/shared/InputWithLabel';

const LoginInputs = ({ email, password, setEmail, setPassword }) => {
  return (
    <>
      <InputWithLabel
        value={email}
        setValue={setEmail}
        label="Email"
        type={'text'}
        placeholder="Enter email address"
      />

      <InputWithLabel
        value={password}
        setValue={setPassword}
        label="Password"
        type={'password'}
        placeholder="Enter your Password"
      />
    </>
  );
};

export default LoginInputs;
