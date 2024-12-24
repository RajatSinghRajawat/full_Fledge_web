// // import React, { useState } from 'react';
// // import { Box, Grid, TextField, Typography, Button, Select, MenuItem, InputAdornment, InputLabel, FormControl } from '@mui/material';
// // import AccountCircle from '@mui/icons-material/AccountCircle';
// // import EmailIcon from '@mui/icons-material/Email';
// // import LockIcon from '@mui/icons-material/Lock';

// // const Register = () => {
// //   const [formType, setFormType] = useState('register'); // Toggle between 'register' and 'login'

// //   // State for registration fields
// //   const [firstName, setFirstName] = useState('');
// //   const [lastName, setLastName] = useState('');
// //   const [username, setUsername] = useState('');
// //   const [email, setEmail] = useState('');
// //   const [gender, setGender] = useState('');
// //   const [password, setPassword] = useState('');
// //   const [confirmPassword, setConfirmPassword] = useState('');
// //   const [phoneNumber, setPhoneNumber] = useState('');
// //   const [address, setAddress] = useState({
// //     street: '',
// //     city: '',
// //     state: '',
// //     postalCode: '',
// //     country: '',
// //   });

// //   const signUp = () => {
// //     try {
// //       const userData = JSON.stringify({
// //         firstName,
// //         lastName,
// //         username,
// //         email,
// //         password,
// //         gender,
// //         phoneNumber,
// //         address,
// //       });

// //       const requestOptions = {
// //         method: 'POST',
// //         headers: { 'Content-Type': 'application/json' },
// //         body: userData,
// //       };

// //       fetch('http://localhost:5000/signUpUser', requestOptions)
// //         .then(response => response.json())
// //         .then(result => console.log(result))
// //         .catch(error => console.error('Error:', error));
// //     } catch (error) {
// //       console.log(error);
// //     }
// //   };

// //   return (
// //     <Box
// //       sx={{
// //         display: 'flex',
// //         justifyContent: 'center',
// //         alignItems: 'center',
// //         minHeight: '80vh',
// //         backgroundColor: '#f5f5f5',
// //         padding: 2,
// //       }}
// //     >
// //       <Grid
// //         container
// //         spacing={2}
// //         sx={{
// //           maxWidth: 900,
// //           boxShadow: 3,
// //           borderRadius: 2,
// //           overflow: 'hidden',
// //           backgroundColor: '#fff',
// //         }}
// //       >
// //         {/* Image Section */}
// //         <Grid item xs={12} md={6}>
// //           <Box
// //             component="img"
// //             src="https://wallpapercrafter.com/desktop3/1017357-daniel-craig-businessman-business-males-men-business.jpg"
// //             alt="Form Banner"
// //             sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
// //           />
// //         </Grid>

// //         <Grid item xs={12} md={6} sx={{ padding: 4 }}>
// //           <Typography variant="h5" component="h2" sx={{ mb: 2, fontWeight: 'bold' }}>
// //             REGISTRATION FORM
// //           </Typography>

// //           <Grid container spacing={2}>
// //             <Grid item xs={6}>
// //               <TextField
// //                 value={firstName}
// //                 onChange={(e) => setFirstName(e.target.value)}
// //                 label="First Name"
// //                 fullWidth
// //               />
// //             </Grid>
// //             <Grid item xs={6}>
// //               <TextField
// //                 value={lastName}
// //                 onChange={(e) => setLastName(e.target.value)}
// //                 label="Last Name"
// //                 fullWidth
// //               />
// //             </Grid>
// //           </Grid>

// //           <TextField
// //             value={username}
// //             onChange={(e) => setUsername(e.target.value)}
// //             label="Username"
// //             fullWidth
// //             sx={{ mt: 2 }}
// //             InputProps={{
// //               startAdornment: (
// //                 <InputAdornment position="start">
// //                   <AccountCircle />
// //                 </InputAdornment>
// //               ),
// //             }}
// //           />

// //           <TextField
// //             value={email}
// //             onChange={(e) => setEmail(e.target.value)}
// //             label="Email Address"
// //             fullWidth
// //             sx={{ mt: 2 }}
// //             InputProps={{
// //               startAdornment: (
// //                 <InputAdornment position="start">
// //                   <EmailIcon />
// //                 </InputAdornment>
// //               ),
// //             }}
// //           />

// //           <FormControl fullWidth sx={{ mt: 2 }}>
// //             <InputLabel>Gender</InputLabel>
// //             <Select
// //               value={gender}
// //               onChange={(e) => setGender(e.target.value)}
// //               label="Gender"
// //               fullWidth
// //             >
// //               <MenuItem value="" disabled>
// //                 Select Gender
// //               </MenuItem>
// //               <MenuItem value="male">Male</MenuItem>
// //               <MenuItem value="female">Female</MenuItem>
// //               <MenuItem value="other">Other</MenuItem>
// //             </Select>
// //           </FormControl>

// //           <TextField
// //             value={password}
// //             onChange={(e) => setPassword(e.target.value)}
// //             label="Password"
// //             type="password"
// //             fullWidth
// //             sx={{ mt: 2 }}
// //             InputProps={{
// //               startAdornment: (
// //                 <InputAdornment position="start">
// //                   <LockIcon />
// //                 </InputAdornment>
// //               ),
// //             }}
// //           />

// //           <TextField
// //             value={confirmPassword}
// //             onChange={(e) => setConfirmPassword(e.target.value)}
// //             label="Confirm Password"
// //             type="password"
// //             fullWidth
// //             sx={{ mt: 2 }}
// //             InputProps={{
// //               startAdornment: (
// //                 <InputAdornment position="start">
// //                   <LockIcon />
// //                 </InputAdornment>
// //               ),
// //             }}
// //           />

// //           <Button
// //             onClick={signUp}
// //             variant="contained"
// //             color="primary"
// //             fullWidth
// //             sx={{
// //               mt: 3,
// //               py: 1.5,
// //               fontWeight: 'bold',
// //               backgroundColor: '#000',
// //             }}
// //           >
// //             Register
// //           </Button>
// //         </Grid>
// //       </Grid>
// //     </Box>
// //   );
// // };

// // export default Register;







// import React, { useState } from 'react';
// import { Box, Grid, Typography, Button } from '@mui/material';

// const Register = () => {
//   const [isSignUp, setIsSignUp] = useState(false);

//   const toggleForm = () => {
//     setIsSignUp(!isSignUp);
//   };

// const [formType, setFormType] = useState('register'); // Toggle between 'register' and 'login'

// // State for registration fields
// const [firstName, setFirstName] = useState('');
// const [lastName, setLastName] = useState('');
// const [username, setUsername] = useState('');
// const [email, setEmail] = useState('');
// const [gender, setGender] = useState('');
// const [password, setPassword] = useState('');
// const [confirmPassword, setConfirmPassword] = useState('');
// const [phoneNumber, setPhoneNumber] = useState('');
// const [address, setAddress] = useState({
//   street: '',
//   city: '',
//   state: '',
//   postalCode: '',
//   country: '',
// });

// const signUp = () => {
//   try {
//     const userData = JSON.stringify({
//       firstName,
//       lastName,
//       username,
//       email,
//       password,
//       gender,
//       phoneNumber,
//       address,
//     });

//     const requestOptions = {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: userData,
//     };

//     fetch('http://localhost:5000/signUpUser', requestOptions)
//       .then(response => response.json())
//       .then(result => console.log(result))
//       .catch(error => console.error('Error:', error));
//   } catch (error) {
//     console.log(error);
//   }
// };


//   return (

//     <>

// <section className="min-h-screen flex justify-center items-center bg-yellow-400 p-5">
//       <div
//         className={`relative w-full max-w-4xl h-[500px] bg-white shadow-lg overflow-hidden transition-transform duration-500 ${
//           isSignUp ? 'translate-x-0' : ''
//         }`}
//       >
//         {/* Sign-In Section */}
//         <div
//           className={`absolute top-0 left-0 flex flex-col md:flex-row w-full h-full transform transition-transform duration-500 ${
//             isSignUp ? 'translate-x-full' : 'translate-x-0'
//           }`}
//         >
//           <div className="w-full md:w-1/2 bg-cover bg-center hidden md:block">
//             <img
//               src="https://raw.githubusercontent.com/WoojinFive/CSS_Playground/master/Responsive%20Login%20and%20Registration%20Form/img1.jpg"
//               alt="Sign-In"
//               className="h-full w-full object-cover"
//             />
//           </div>
//           <div className="flex-1 flex items-center justify-center p-8 bg-white">
//             <form className="w-full max-w-sm">
//               <h2 className="text-2xl font-semibold text-center mb-4">Sign In</h2>
//               <input
//                 type="text"
//                 placeholder="Username"
//                 className="w-full p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-yellow-500"
//               />
//               <input
//                 type="password"
//                 placeholder="Password"
//                 className="w-full p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-yellow-500"
//               />
//               <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition">
//                 Login
//               </button>
//               <p className="text-center mt-4 text-sm">
//                 Don't have an account?{' '}
//                 <a
//                   href="#"
//                   className="text-blue-500 font-medium"
//                   onClick={toggleForm}
//                 >
//                   Sign Up
//                 </a>
//               </p>
//             </form>
//           </div>
//         </div>

//         {/* Sign-Up Section */}
//         <div
//           className={`absolute top-0 left-0 flex flex-col md:flex-row w-full h-full transform transition-transform duration-500 ${
//             isSignUp ? 'translate-x-0' : '-translate-x-full'
//           }`}
//         >
//           <div className="flex-1 flex items-center justify-center p-8 bg-white">
//             <form className="w-full max-w-sm">
//               <h2 className="text-2xl font-semibold text-center mb-4">
//                 Create an account
//               </h2>
//               <input
//                 type="text"
//                 placeholder="Username"
//                 className="w-full p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-yellow-500"
//               />
//               <input
//                 type="email"
//                 placeholder="Email Address"
//                 className="w-full p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-yellow-500"
//               />
//               <input
//                 type="password"
//                 placeholder="Create Password"
//                 className="w-full p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-yellow-500"
//               />
//               <input
//                 type="password"
//                 placeholder="Confirm Password"
//                 className="w-full p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-yellow-500"
//               />
//               <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition">
//                 Sign Up
//               </button>
//               <p className="text-center mt-4 text-sm">
//                 Already have an account?{' '}
//                 <a
//                   href="#"
//                   className="text-blue-500 font-medium"
//                   onClick={toggleForm}
//                 >
//                   Sign In
//                 </a>
//               </p>
//             </form>
//           </div>
//           <div className="w-full md:w-1/2 bg-cover bg-center hidden md:block">
//             <img
//               src="https://raw.githubusercontent.com/WoojinFive/CSS_Playground/master/Responsive%20Login%20and%20Registration%20Form/img2.jpg"
//               alt="Sign-Up"
//               className="h-full w-full object-cover"
//             />
//           </div>
//         </div>
//       </div>
//     </section>


//     </>


//   );
// };

// export default Register;






import React, { useState } from 'react';

const Register = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const toggleForm = () => {
    setIsSignUp((prev) => !prev);
  };

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
              <form className="w-full max-w-sm space-y-4">
                <h2 className="text-2xl font-semibold text-center">Sign In</h2>
                <input
                  type="text"
                  placeholder="Username"
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-yellow-500"
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-yellow-500"
                />
                <button
                  type="button"
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
                onSubmit={(e) => e.preventDefault()}
              >
                <h2 className="text-2xl font-semibold text-center">Create an Account</h2>

                {/* <input
                  type="text"
                  placeholder="First Name"
                  className="p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-yellow-500"
                /> */}


                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-yellow-500"
                />

                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-yellow-500"
                />
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="password"
                    placeholder="Password"
                    className="p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-yellow-500"
                  />
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    className="p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-yellow-500"
                  />
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
