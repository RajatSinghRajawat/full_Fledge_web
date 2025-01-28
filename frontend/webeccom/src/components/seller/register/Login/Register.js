import React, { useState } from 'react';
import abstract from "../Login/Abstraction(1).png";
import { FaGoogle, FaFacebookF } from "react-icons/fa";
import { MdOutlineAccountCircle, MdOutlineEmail, MdLock } from "react-icons/md";
import axios from "axios";
import Nav from "../../../navigation/Nav";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [activeTab, setActiveTab] = useState("create");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const toggleForm = () => setActiveTab((prev) => (prev === "create" ? "login" : "create"));

  const register = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const payload = { firstName: name, email, password };
      const response = await axios.post("http://localhost:5000/signUpUser", payload);

      if (response?.data?.token) {
        localStorage.setItem("secret", response.data.token);
        navigate("/");
      }
    } catch (error) {
      setError(error.response?.data?.message || "Something went wrong!");
    } finally {
      setIsLoading(false);
    }
  };

  const login = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const payload = { email, password };
      const response = await axios.post("http://localhost:5000/LogInUser", payload);

      if (response?.data?.token) {
        localStorage.setItem("token", response.data.token);
        navigate("/");
      }
    } catch (error) {
      setError(error.response?.data?.message || "Something went wrong!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Nav />
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="flex max-w-7xl w-full h-5/6 rounded-lg overflow-hidden shadow-lg">
          {/* Left Section */}
          <div className="w-1/2 pt-5 bg-teal-200 flex flex-col justify-center items-center p-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center">
              <span className='font-bold'>EcomZone</span> <br /> Discover Your Unseen Passion
            </h1>
            <p className="text-gray-600 text-lg text-center">
              Make your design look more attractive with The e-commerce platform that you can trust.
            </p>
            <img src={abstract} alt="Abstract 3D Art" className="mt-5" />
          </div>

          {/* Right Section */}
          <div className="w-1/2 flex flex-col bg-white p-8">
            {/* Tab Buttons */}
            <div className="flex justify-center gap-8 mb-6">
              <button
                className={`text-lg font-semibold px-4 py-2 rounded-lg ${activeTab === "create" ? "text-white bg-teal-500" : "text-gray-500 bg-gray-200"}`}
                onClick={() => setActiveTab("create")}
              >
                Create Account
              </button>
              <button
                className={`text-lg font-semibold px-4 py-2 rounded-lg ${activeTab === "login" ? "text-white bg-teal-500" : "text-gray-500 bg-gray-200"}`}
                onClick={() => setActiveTab("login")}
              >
                Login
              </button>
            </div>

            {activeTab === "create" ? (
              <div>
                <h2 className="text-3xl font-semibold text-gray-800 mb-4">Create Account</h2>
                <div className="flex gap-4 mb-6">
                  <button className="flex items-center gap-2 px-6 py-2 border rounded-lg border-gray-300 text-gray-700 hover:bg-gray-100">
                    <FaGoogle size={18} /> Continue with Google
                  </button>
                  <button className="flex items-center gap-2 px-6 py-2 border rounded-lg border-gray-300 text-gray-700 hover:bg-gray-100">
                    <FaFacebookF size={18} /> Continue with Facebook
                  </button>
                </div>
                <p className="text-gray-500 mb-4 text-center">- OR -</p>
                {error && <p className="text-red-500 text-center mb-4">{error}</p>}
                <form onSubmit={register} className="flex flex-col gap-4 w-3/4 mx-auto">
                  <div className="flex items-center gap-2 border-b border-gray-300 pb-2">
                    <MdOutlineAccountCircle size={20} className="text-gray-400" />
                    <input
                      type="text"
                      placeholder="Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="flex-1 outline-none text-gray-700 placeholder-gray-400"
                    />
                  </div>
                  <div className="flex items-center gap-2 border-b border-gray-300 pb-2">
                    <MdOutlineEmail size={20} className="text-gray-400" />
                    <input
                      type="email"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="flex-1 outline-none text-gray-700 placeholder-gray-400"
                    />
                  </div>
                  <div className="flex items-center gap-2 border-b border-gray-300 pb-2">
                    <MdLock size={20} className="text-gray-400" />
                    <input
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="flex-1 outline-none text-gray-700 placeholder-gray-400"
                    />
                  </div>
                  <button
                    className={`w-full mt-4 py-2 bg-teal-400 text-white rounded-lg hover:bg-teal-500 ${isLoading && "opacity-50 cursor-not-allowed"}`}
                    disabled={isLoading}
                    onClick={()=>isLoading ? "Wating..." : setActiveTab("login")}
                  >
                    {isLoading ? "Creating Account..." : "Create Account"}
                  </button>
                </form>
              </div>
            ) : (
              <div>
                <h2 className="text-3xl font-semibold text-gray-800 mb-4">Login</h2>
                <div className="flex gap-4 mb-6">
                  <button className="flex items-center gap-2 px-6 py-2 border rounded-lg border-gray-300 text-gray-700 hover:bg-gray-100">
                    <FaGoogle size={18} /> Login with Google
                  </button>
                  <button className="flex items-center gap-2 px-6 py-2 border rounded-lg border-gray-300 text-gray-700 hover:bg-gray-100">
                    <FaFacebookF size={18} /> Login with Facebook
                  </button>
                </div>
                <p className="text-gray-500 mb-4 text-center">- OR -</p>
                {error && <p className="text-red-500 text-center mb-4">{error}</p>}
                <form onSubmit={login} className="flex flex-col gap-4 w-3/4 mx-auto">
                  <div className="flex items-center gap-2 border-b border-gray-300 pb-2">
                    <MdOutlineEmail size={20} className="text-gray-400" />
                    <input
                      type="email"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="flex-1 outline-none text-gray-700 placeholder-gray-400"
                    />
                  </div>
                  <div className="flex items-center gap-2 border-b border-gray-300 pb-2">
                    <MdLock size={20} className="text-gray-400" />
                    <input
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="flex-1 outline-none text-gray-700 placeholder-gray-400"
                    />
                  </div>
                  <button
                    className={`w-full mt-4 py-2 bg-teal-400 text-white rounded-lg hover:bg-teal-500 ${isLoading && "opacity-50 cursor-not-allowed"}`}
                    disabled={isLoading}
                  >
                    {isLoading ? "Logging In..." : "Login"}
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
