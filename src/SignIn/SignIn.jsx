import { useContext, useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { authContext } from "../components/AuthProvider/AuthProvider";

const SignIn = () => {
  const { handleGoogleLogin, handleLogin } = useContext(authContext);
  const [error, setError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    localStorage.setItem("lastTypedEmail", value); 
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    handleLogin(email, password)
      .then((res) => {
        
        toast.success("User Logged In Successfully.");

        setTimeout(() => {
          const redirectTo = location.state?.from || "/";
          navigate(redirectTo);
        }, 2000);
      })
      .catch((err) => {
        if (err.code === "auth/wrong-password" || err.code === "auth/user-not-found") {
          setError("Invalid credentials. Please check your email and password.");
          toast.error("Invalid credentials. Please check your email and password.");
        } else {
          setError("Something went wrong. Please try again.");
          toast.error("Something went wrong. Please try again.");
        }
      });
  };

  const googleLoginHandler = () => {
    handleGoogleLogin().then((res) => {
      const redirectTo = location.state?.from || "/";
      navigate(redirectTo);
    });
  };

  return (
    <div>
      <Helmet>
        <title>LogIn - Study Together</title>
      </Helmet>

      <div className="hero bg-gray-200 py-20">
        <div className="hero-content flex-col w-11/12 sm:w-6/12">
          <div className="text-center">
            <h1 className="text-3xl sm:text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl">
            <form className="card-body gap-6" onSubmit={handleSubmit}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-md sm:text-xl">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email@example.com"
                  className="input input-bordered"
                  required
                  value={email}
                  onChange={handleEmailChange} 
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-md sm:text-xl">Password</span>
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    name="password"
                    onChange={handlePasswordChange}
                    placeholder="********"
                    className="input input-bordered w-full"
                    required
                  />
                  <span
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                  >
                    {showPassword ? <FiEyeOff size={24} /> : <FiEye size={24} />}
                  </span>
                </div>
                <label className="label">
                  <Link
                    to="/forgetpassword"
                    className="label-text-alt link text-sm sm:text-lg link-hover text-blue-600"
                  >
                    Forgot password?
                  </Link>
                </label>
              </div>

              <div className="form-control sm:mt-6">
                <button className="btn btn-primary w-8/12 mx-auto text-2xl font-bold text-white" type="submit">
                  Login
                </button>
              </div>
              <hr />
              <p>
                Don&apos;t have an account?{" "}
                <Link className="font-bold hover:underline" to="/register">
                  Register Now!
                </Link>
              </p>
              <p>
                or, Sign in with
                <div className="font-bold hover:underline flex justify-around sm:w-8/12 mx-auto">
                  <button
                    type="button"
                    onClick={googleLoginHandler}
                    className="btn bg-transparent rounded-2xl mt-8 text-4xl"
                  >
                    <FcGoogle />
                  </button>
                  <button type="button" className="btn bg-transparent rounded-2xl mt-8 text-4xl text-blue-600">
                    <FaFacebook />
                  </button>
                  <button type="button" className="btn bg-transparent rounded-2xl mt-8 text-4xl">
                    <FaGithub />
                  </button>
                </div>
              </p>
            </form>
            {error && <p className=" text-center text-red-500">{error}</p>}
          </div>
        </div>
      </div>

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default SignIn;