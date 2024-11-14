// import React, { useState } from 'react';
// import { Box, Grid, TextField, Typography, Button, Select, MenuItem, InputAdornment, InputLabel, FormControl } from '@mui/material';
// import AccountCircle from '@mui/icons-material/AccountCircle';
// import EmailIcon from '@mui/icons-material/Email';
// import LockIcon from '@mui/icons-material/Lock';

// const Register = () => {
//   const [formType, setFormType] = useState('register'); // Toggle between 'register' and 'login'

//   // State for registration fields
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [gender, setGender] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [address, setAddress] = useState({
//     street: '',
//     city: '',
//     state: '',
//     postalCode: '',
//     country: '',
//   });

//   const signUp = () => {
//     try {
//       const userData = JSON.stringify({
//         firstName,
//         lastName,
//         username,
//         email,
//         password,
//         gender,
//         phoneNumber,
//         address,
//       });

//       const requestOptions = {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: userData,
//       };

//       fetch('http://localhost:5000/signUpUser', requestOptions)
//         .then(response => response.json())
//         .then(result => console.log(result))
//         .catch(error => console.error('Error:', error));
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <Box
//       sx={{
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         minHeight: '80vh',
//         backgroundColor: '#f5f5f5',
//         padding: 2,
//       }}
//     >
//       <Grid
//         container
//         spacing={2}
//         sx={{
//           maxWidth: 900,
//           boxShadow: 3,
//           borderRadius: 2,
//           overflow: 'hidden',
//           backgroundColor: '#fff',
//         }}
//       >
//         {/* Image Section */}
//         <Grid item xs={12} md={6}>
//           <Box
//             component="img"
//             src="https://wallpapercrafter.com/desktop3/1017357-daniel-craig-businessman-business-males-men-business.jpg"
//             alt="Form Banner"
//             sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
//           />
//         </Grid>

//         <Grid item xs={12} md={6} sx={{ padding: 4 }}>
//           <Typography variant="h5" component="h2" sx={{ mb: 2, fontWeight: 'bold' }}>
//             REGISTRATION FORM
//           </Typography>

//           <Grid container spacing={2}>
//             <Grid item xs={6}>
//               <TextField
//                 value={firstName}
//                 onChange={(e) => setFirstName(e.target.value)}
//                 label="First Name"
//                 fullWidth
//               />
//             </Grid>
//             <Grid item xs={6}>
//               <TextField
//                 value={lastName}
//                 onChange={(e) => setLastName(e.target.value)}
//                 label="Last Name"
//                 fullWidth
//               />
//             </Grid>
//           </Grid>

//           <TextField
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             label="Username"
//             fullWidth
//             sx={{ mt: 2 }}
//             InputProps={{
//               startAdornment: (
//                 <InputAdornment position="start">
//                   <AccountCircle />
//                 </InputAdornment>
//               ),
//             }}
//           />

//           <TextField
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             label="Email Address"
//             fullWidth
//             sx={{ mt: 2 }}
//             InputProps={{
//               startAdornment: (
//                 <InputAdornment position="start">
//                   <EmailIcon />
//                 </InputAdornment>
//               ),
//             }}
//           />

//           <FormControl fullWidth sx={{ mt: 2 }}>
//             <InputLabel>Gender</InputLabel>
//             <Select
//               value={gender}
//               onChange={(e) => setGender(e.target.value)}
//               label="Gender"
//               fullWidth
//             >
//               <MenuItem value="" disabled>
//                 Select Gender
//               </MenuItem>
//               <MenuItem value="male">Male</MenuItem>
//               <MenuItem value="female">Female</MenuItem>
//               <MenuItem value="other">Other</MenuItem>
//             </Select>
//           </FormControl>

//           <TextField
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             label="Password"
//             type="password"
//             fullWidth
//             sx={{ mt: 2 }}
//             InputProps={{
//               startAdornment: (
//                 <InputAdornment position="start">
//                   <LockIcon />
//                 </InputAdornment>
//               ),
//             }}
//           />

//           <TextField
//             value={confirmPassword}
//             onChange={(e) => setConfirmPassword(e.target.value)}
//             label="Confirm Password"
//             type="password"
//             fullWidth
//             sx={{ mt: 2 }}
//             InputProps={{
//               startAdornment: (
//                 <InputAdornment position="start">
//                   <LockIcon />
//                 </InputAdornment>
//               ),
//             }}
//           />

//           <Button
//             onClick={signUp}
//             variant="contained"
//             color="primary"
//             fullWidth
//             sx={{
//               mt: 3,
//               py: 1.5,
//               fontWeight: 'bold',
//               backgroundColor: '#000',
//             }}
//           >
//             Register
//           </Button>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// };

// export default Register;







import React, { useState } from 'react';
import { Box, Grid, Typography, Button } from '@mui/material';

const Register = () => {
  const [formType, setFormType] = useState('register'); // Toggle between 'register' and 'login'

  // State for registration fields
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState({
    street: '',
    city: '',
    state: '',
    postalCode: '',
    country: '',
  });

  const signUp = () => {
    try {
      const userData = JSON.stringify({
        firstName,
        lastName,
        username,
        email,
        password,
        gender,
        phoneNumber,
        address,
      });

      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: userData,
      };

      fetch('http://localhost:5000/signUpUser', requestOptions)
        .then(response => response.json())
        .then(result => console.log(result))
        .catch(error => console.error('Error:', error));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '80vh',
        backgroundColor: '#f5f5f5',
        padding: 2,
      }}
    >
      <Grid
        container
        spacing={2}
        sx={{
          maxWidth: 900,
          boxShadow: 3,
          borderRadius: 2,
          overflow: 'hidden',
          backgroundColor: '#fff',
        }}
      >
        {/* Image Section */}
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src="https://wallpapercrafter.com/desktop3/1017357-daniel-craig-businessman-business-males-men-business.jpg"
            alt="Form Banner"
            sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </Grid>

        <Grid item xs={12} md={6} sx={{ padding: 4 }}>
          <Typography variant="h5" component="h2" sx={{ mb: 2, fontWeight: 'bold' }}>
            REGISTRATION FORM
          </Typography>

          <Grid container spacing={2}>
            <Grid item xs={6}>
              <input
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First Name"
                style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
              />
            </Grid>
            <Grid item xs={6}>
              <input
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Last Name"
                style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
              />
            </Grid>
          </Grid>

          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            style={{ width: '100%', padding: '10px', marginTop: '10px' }}
          />

          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
            style={{ width: '100%', padding: '10px', marginTop: '10px' }}
          />

          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            style={{ width: '100%', padding: '10px', marginTop: '10px' }}
          >
            <option value="" disabled>Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>

          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            type="password"
            style={{ width: '100%', padding: '10px', marginTop: '10px' }}
          />

          <input
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm Password"
            type="password"
            style={{ width: '100%', padding: '10px', marginTop: '10px' }}
          />

          <Button
            onClick={signUp}
            variant="contained"
            color="primary"
            fullWidth
            sx={{
              mt: 3,
              py: 1.5,
              fontWeight: 'bold',
              backgroundColor: '#000',
            }}
          >
            Register
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Register;
