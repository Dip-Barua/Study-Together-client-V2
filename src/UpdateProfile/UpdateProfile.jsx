import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { authContext } from "../components/AuthProvider/AuthProvider";

const UpdateProfile = () => {
  const { user, manageProfile } = useContext(authContext); 
  const [name, setName] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      setName(user.displayName || "");
      setEmail(user.email || "");
      setPhotoURL(user.photoURL || "");
    }
  }, [user]);

  const handleUpdate = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(""); 

    manageProfile(name, photoURL)
      .then(() => {
        setIsLoading(false);
        navigate("/dashboard"); 
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error.message); 
      });
  };

  return (
    <div className="container mx-auto p-8 ">
      <h1 className="text-4xl font-bold text-center mb-6">Update Profile</h1>

      <form onSubmit={handleUpdate} className="max-w-lg mx-auto bg-white p-6 rounded-2xl shadow-xl">
        <div className="form-control mb-4">
          <label className="label" htmlFor="name">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            className="input input-bordered w-full"
            required
          />
        </div>

        <div className="form-control mb-4">
          <label className="label" htmlFor="email">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="input input-bordered w-full"
            disabled
          />
        </div>

        <div className="form-control mb-4">
          <label className="label" htmlFor="photoURL">
            <span className="label-text">Profile Photo URL</span>
          </label>
          <input
            type="url"
            id="photoURL"
            name="photoURL"
            value={photoURL}
            onChange={(e) => setPhotoURL(e.target.value)}
            placeholder="Enter your profile photo URL"
            className="input input-bordered w-full"
          />
        </div>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <div className="form-control mt-6">
          <button
            type="submit"
            className="btn btn-primary w-6/12 mx-auto text-xl"
            disabled={isLoading}
          >
            {isLoading ? "Updating..." : "Update Profile"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateProfile;