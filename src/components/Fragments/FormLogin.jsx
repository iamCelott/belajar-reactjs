import InputForm from "../Elements/Input/index";
import Button from "../Elements/Button";
const FormLogin = () => {
  return (
    <form action="">
      <InputForm
        label="email"
        type="email"
        placeholder="example@gmail.com"
        name="email"
      />
      <InputForm
        label="password"
        type="password"
        placeholder="********"
        name="password"
      />
      <Button variant="bg-blue-600 w-full">Login</Button>
    </form>
  );
};

export default FormLogin;
