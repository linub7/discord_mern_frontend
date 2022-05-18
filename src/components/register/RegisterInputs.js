import InputWithLabel from 'components/shared/InputWithLabel';

const RegisterInputs = ({
  username,
  setUsername,
  email,
  password,
  setEmail,
  setPassword,
}) => {
  return (
    <>
      <InputWithLabel
        value={username}
        setValue={setUsername}
        label="Username"
        type={'text'}
        placeholder="Enter Username"
      />

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

export default RegisterInputs;
