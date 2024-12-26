import { useContext, useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { authContext } from "../components/AuthProvider/AuthProvider";

const Register = () => {
  const { handleRegister, manageProfile } = useContext(authContext);
  const { handleGoogleLogin } = useContext(authContext);
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);

    if (!passwordRegex.test(newPassword)) {
      setPasswordError(
        "Password must be at least 6 characters long, contain at least one uppercase letter and one lowercase letter."
      );
    } else {
      setPasswordError("");
    }
  };

  const googleLoginHandler = () => {
    handleGoogleLogin()
      .then((res) => {
        const redirectTo = location.state?.from || '/';
        navigate(redirectTo);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const image = e.target.url.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (passwordError) {
      return;
    }

    setIsLoading(true); 

    handleRegister(email, password)
    .then((res) => {
        console.log("Registration successful:", res);
        manageProfile(name, image)
          .then(() => {
            setIsLoading(false);
            toast.success("Registration successful!");
            setTimeout(() => {
              navigate("/");
            }, 2000); 
            
          })
          .catch((error) => {
            setIsLoading(false);
            console.error("Error managing profile:", error);
            toast.error("Error managing profile.");
          });
      })
      .catch((error) => {
        setIsLoading(false);
        console.error("Error registering:", error);
        toast.error("Registration failed.");
      });
  };

  return (
    <div>
      <Helmet>
        <title>SignUp - Study Together</title>
      </Helmet>

      {isLoading ? (
        <div className="text-center">
          <h1 className="text-4xl font-bold ">Creating Profile...</h1>
        </div>
      ) : (
        <div className="hero py-20">
          <div className="hero-content flex-col w-11/12 sm:w-6/12">
            <div className="text-center">
              <h1 className="text-5xl font-bold">Sign Up Now!</h1>
            </div>
            <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl">
              <form className="card-body gap-6" onSubmit={handleSubmit}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-xl">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    className="input input-bordered"
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-xl">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email@example.com"
                    className="input input-bordered"
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-xl">Photo URL</span>
                  </label>
                  <input
                    type="url"
                    name="url"
                    placeholder="https://example.com/photo.jpg"
                    className="input input-bordered"
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-xl">Password</span>
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
                  {passwordError && (
                    <p className="text-red-500 text-sm mt-2">{passwordError}</p>
                  )}
                </div>
                <div className="form-control mt-6">
                  <button
                    type="submit"
                    className="btn btn-primary w-8/12 mx-auto text-2xl font-bold text-white"
                    disabled={!!passwordError}
                  >
                    Register
                  </button>
                </div>

                <hr />

                <p>
                  Already have an account?{" "}
                  <Link className="font-bold hover:underline" to="/login">
                    Login!
                  </Link>
                </p>
                <p>
                or, Continue with 
                <div className="font-bold hover:underline">
                <div className="font-bold hover:underline flex justify-around w-8/12 mx-auto">
                  <button type="button" onClick={googleLoginHandler} className="btn bg-transparent rounded-2xl mt-8 text-4xl"><FcGoogle />
                  </button>
                  <button type="button" className="btn bg-transparent rounded-2xl mt-8 text-4xl text-blue-600"><FaFacebook />

                  </button>
                  <button type="button" className="btn bg-transparent rounded-2xl mt-8 text-4xl"><FaGithub />

                  </button>
                </div>
                </div>
              </p>


              </form>
            </div>
          </div>
        </div>
      )}
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

export default Register;