import React, { useState } from 'react';
import abstract from "../Login/Abstraction(1).png";
import { FaGoogle, FaFacebookF } from "react-icons/fa";
import { MdOutlineAccountCircle, MdOutlineEmail, MdLock, MdVisibility, MdVisibilityOff } from "react-icons/md";
import axios from "axios";
import Nav from "../../../navigation/Nav";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  const [activeTab, setActiveTab] = useState("create");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const togglePasswordVisibility = () => setIsPasswordVisible(prev => !prev);

  const register = async (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      toast.error("All fields are required!");
      return;
    }

    setIsLoading(true);

    try {
      const payload = { name, email, password };
      await axios.post("http://localhost:5000/signUpUser", payload);

      toast.success("Account created successfully! Please log in.");
      
      setTimeout(() => setActiveTab("login"), 1500); // Switch to login after 1.5s
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong!");
    } finally {
      setIsLoading(false);
    }
  };

  const login = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Email and password are required!");
      return;
    }

    setIsLoading(true);

    try {
      const payload = { email, password };
      const response = await axios.post("http://localhost:5000/LogInUser", payload);

      if (response?.data?.token) {
        localStorage.setItem("token", response.data.token);
        toast.success("Login successful!");
        setTimeout(() => navigate("/"), 2000);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Nav />
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="flex max-w-7xl w-full h-5/6 rounded-lg overflow-hidden shadow-lg">
          
          {/* Left Section */}
          <div className="w-1/2 pt-5 bg-teal-200 flex flex-col justify-center items-center p-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center">
              <span className='font-bold'>EcomZone</span> <br /> Discover Your Unseen Passion
            </h1>
            <p className="text-gray-600 text-lg text-center">
              Make your design look more attractive with the e-commerce platform that you can trust.
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
                
                <form onSubmit={register} className="flex flex-col gap-4 w-3/4 mx-auto">
                  <div className="flex items-center gap-2 border-b border-gray-300 pb-2">
                    <MdOutlineAccountCircle size={20} className="text-gray-400" />
                    <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} className="flex-1 outline-none text-gray-700 placeholder-gray-400" />
                  </div>
                  <div className="flex items-center gap-2 border-b border-gray-300 pb-2">
                    <MdOutlineEmail size={20} className="text-gray-400" />
                    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="flex-1 outline-none text-gray-700 placeholder-gray-400" />
                  </div>
                  <div className="flex items-center gap-2 border-b border-gray-300 pb-2">
                    <MdLock size={20} className="text-gray-400" />
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="flex-1 outline-none text-gray-700 placeholder-gray-400" />
                  </div>
                  <button className="w-full mt-4 py-2 bg-teal-400 text-white rounded-lg hover:bg-teal-500 disabled:opacity-50" disabled={isLoading}>
                    {isLoading ? "Creating Account..." : "Create Account"}
                  </button>
                </form>
              </div>
            ) : (
              <div>
                <h2 className="text-3xl font-semibold text-gray-800 mb-4">Login</h2>

                <form onSubmit={login} className="flex flex-col gap-4 w-3/4 mx-auto">
                  <div className="flex items-center gap-2 border-b border-gray-300 pb-2">
                    <MdOutlineEmail size={20} className="text-gray-400" />
                    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="flex-1 outline-none text-gray-700 placeholder-gray-400" />
                  </div>
                  <div className="flex items-center gap-2 border-b border-gray-300 pb-2 relative">
                    <MdLock size={20} className="text-gray-400" />
                    <input type={isPasswordVisible ? "text" : "password"} placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="flex-1 outline-none text-gray-700 placeholder-gray-400" />
                    <span className="cursor-pointer absolute right-0" onClick={togglePasswordVisibility}>
                      {isPasswordVisible ? <MdVisibility size={20} /> : <MdVisibilityOff size={20} />}
                    </span>
                  </div>
                  <button className="w-full mt-4 py-2 bg-teal-400 text-white rounded-lg hover:bg-teal-500 disabled:opacity-50" disabled={isLoading}>
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
