import { Link } from "react-router-dom";
const AuthLayouts = (props) => {
  const { children, title, type } = props;
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-xs">
        <h1 className="text-3xl font-bold mb-2 text-blue-600">{title}</h1>
        <p className="font-medium text-slate-500">
          Welcome Please Enter Your Details!
        </p>
        {children}
        <Navigation type={type} />
      </div>
    </div>
  );
};

const Navigation = ({ type }) => {
  if (type === "login") {
    return (
      <p className="text-sm mt-5 text-center">
        Don't Have an Acoount?
        <Link to="/register" className="font-bold text-blue-600 ml-2 ">
          Sign In
        </Link>
      </p>
    );
  } else {
    return (
      <p className="text-sm mt-5 text-center">
        Already Have an Account?
        <Link to="/login" className="font-bold text-blue-600 ml-2 ">
          Login
        </Link>
      </p>
    );
  }
};
export default AuthLayouts;
