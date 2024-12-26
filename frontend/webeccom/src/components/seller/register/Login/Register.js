import React, { useState } from 'react';

const Register = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const toggleForm = () => {
    setIsSignUp((prev) => !prev);
  };

  const register = (e) => {
    try {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const raw = JSON.stringify({
        "firstName": name,
        "email": email,
        "password": password
      });

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
      };

      fetch("http://localhost:5000/signUpUser", requestOptions)
        .then((response) => response.json())
        .then((result) => {
          setName(" ")
          setEmail(" ")
          setPassword(" ")
          console.log(result);

        })
        .catch((error) => console.error(error));
    } catch (error) {
      console.log(error);

    }
  }
  const login = () => {

    try {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const raw = JSON.stringify({
        "email": email,
        "password": password
      });

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
      };

      fetch("http://localhost:5000/LogInUser", requestOptions)
        .then((response) => response.json())
        .then((result) =>{
          setName(" ")
          setEmail(" ")
          setPassword(" ")
          console.log(result);

        })
        .catch((error) => console.error(error));

    } catch (error) {
      console.log(error);

    }
  }

  return (
    <section className="flex justify-center items-center bg-yellow-400 p-5">
      <div className="relative w-full max-w-4xl h-[500px] bg-white shadow-lg overflow-hidden rounded-lg">
        {/* Sign-In Section */}
        <div
          className={`absolute top-0 left-0 w-full h-full transition-transform duration-500 ${isSignUp ? 'translate-x-full' : 'translate-x-0'
            }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 w-full h-full">
            <div className="hidden md:block">
              <img
                src="https://img.freepik.com/free-photo/still-life-wireless-cyberpunk-headphones_23-2151072230.jpg"
                alt="Sign-In"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex items-center justify-center p-6">
              <form onSubmit={login} className="w-full max-w-sm space-y-4">
                <h2 className="text-2xl font-semibold text-center">Sign In</h2>
                <input
                  type="email"
                  placeholder="email"
                  value={email}
                  onChange={(e)=>{setEmail(e.target.value)}}
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-yellow-500"
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e)=>{setPassword(e.target.value)}}
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-yellow-500"
                />
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
                >
                  Login
                </button>
                <p className="text-center text-sm">
                  Don't have an account?{' '}
                  <span
                    className="text-blue-500 font-medium cursor-pointer"
                    onClick={toggleForm}
                  >
                    Sign Up
                  </span>
                </p>
              </form>
            </div>
          </div>
        </div>

        {/* Sign-Up Section */}
        <div
          className={`absolute top-0 left-0 w-full h-full transition-transform duration-500 ${isSignUp ? 'translate-x-0' : '-translate-x-full'
            }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 w-full h-full">
            <div className="flex items-center justify-center p-6">
              <form
                className="w-full max-w-sm space-y-6"
                onSubmit={register}
              >
                <h2 className="text-2xl font-semibold text-center">Create an Account</h2>

                <input
                  type="text"
                  placeholder="First Name"

                  value={name}
                  onChange={(e) => { setName(e.target.value) }}
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-yellow-500"
                />

                <input
                  type="email"
                  placeholder="Email"

                  value={email}
                  onChange={(e) => { setEmail(e.target.value) }}
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-yellow-500"
                />
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="password"
                    placeholder="Password"

                    value={password}
                    onChange={(e) => { setPassword(e.target.value) }}
                    className="p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-yellow-500"
                  />
                  {/* <input
                    type="password"
                    placeholder="Confirm Password"
                    className="p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-yellow-500"
                  /> */}
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
                >
                  Sign Up
                </button>
                <p className="text-center text-sm">
                  Already have an account?{' '}
                  <span
                    className="text-blue-500 font-medium cursor-pointer"
                    onClick={toggleForm}
                  >
                    Sign In
                  </span>
                </p>
              </form>
            </div>
            <div className="hidden md:block">
              <img
                src="https://img.freepik.com/premium-photo/pair-headphones-with-green-background-speaker-that-says-time-is-10-00_1034303-449929.jpg"
                alt="Sign-Up"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
