// import React, { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchProduct } from '../../actions/productActions';
// const Allpros = () => {
//     const dispatch = useDispatch();
//     const { productData, error } = useSelector((state) => state.product);

//     useEffect(() => {
//         dispatch(fetchProduct("Wireless Headphones"));
//     }, [dispatch]);
//     if (error) return <p>Error: {error}</p>;

//     return (
//         <div>
//             <div>
//                 {productData?.map((product, index) => (
//                     <div key={index}>
//                         <h1>{product.name}</h1>
//                         <p>Price: {product.price}</p>
//                         <p>Description: {product.description}</p>
//                         <h1>rajat</h1>

//                     </div>
//                 ))}
//             </div>
//         </div>
//     )
// }

// export default Allpros


// import React, { useState } from "react";
// import { RxHamburgerMenu } from "react-icons/rx";
// import { IoMdArrowDropright, IoMdClose } from "react-icons/io";
// import { FaBed } from "react-icons/fa";
// import { TbToolsKitchen3 } from "react-icons/tb";
// import { MdOutdoorGrill } from "react-icons/md";

// const Allpros = () => {
//   const [desktopMenuOpen, setDesktopMenuOpen] = useState(false);
//   const [selectedCategory, setSelectedCategory] = useState(null);
//   const [defaultCategory, setDefaultCategory] = useState("Bedroom");
//   const navItems = [
//     { label: "Home", href: "#" },
//     { label: "Catalog", href: "#" },
//     { label: "About US", href: "#" },
//     { label: "Contact US", href: "#" },
//   ];
//   const categories = [
//     {
//       category: "Bedroom",
//       icon: <FaBed />,
//       menu: [
//         {
//           title: "Bedroom",
//           items: [
//             {
//               label: "Luxurious Italian Bed",
//               href: "",
//             },
//             { label: "Elegant Queen-size Bed", href: "" },
//             {
//               label: "Artisan Wooden Craft Bed",
//               href: "",
//             },
//             { label: "Royal King-size Bed", href: "" },
//           ],
//         },
//         {
//           title: "BEDS",
//           items: [
//             { label: "Classic Italian Bed", href: "" },
//             { label: "Regal Queen-size Bed", href: "" },
//             { label: "Handcrafted Wooden Bed", href: "" },
//             { label: "Majestic King-size Bed", href: "" },
//           ],
//         },
//       ],
//     },
//     {
//       category: "Outdoor",
//       icon: <MdOutdoorGrill />,

//       menu: [
//         {
//           title: "outdoor",
//           items: [
//             {
//               label: "Sleek Italian Outdoor Bed",
//               href: "",
//             },
//             { label: "Outdoor Queen-size Bed", href: "" },
//             {
//               label: "Natural Wooden Craft Bed",
//               href: "",
//             },
//             {
//               label: "Innovative King-size Outdoor Bed",
//               href: "new-",
//             },
//           ],
//         },
//         {
//           title: "LAMPS",
//           items: [
//             {
//               label: "Vibrant Italian Purple Lamp",
//               href: "",
//             },
//             { label: "High-tech APEX Lamp", href: "" },
//             { label: "Modern PIXAR Lamp", href: "" },
//             { label: "Ambient Nightlamp", href: "" },
//           ],
//         },
//       ],
//     },
//     {
//       category: "Kitchen",
//       icon: <TbToolsKitchen3 />,
//       menu: [
//         {
//           title: "kitchen",
//           items: [
//             { label: "Gourmet Italian Bed", href: "" },
//             { label: "Designer Queen-size Bed", href: "" },
//             {
//               label: "Premium Wooden Craft Bed",
//               href: "",
//             },
//             { label: "Modern King-size Bed", href: "" },
//           ],
//         },
//         {
//           title: "SPECIAL",
//           items: [
//             { label: "Aromatherapy Humidifier", href: "" },
//             { label: "Advanced Bed Cleaner", href: "" },
//             { label: "Smart Vacuum Cleaner", href: "" },
//             { label: "Plush Pillow", href: "" },
//           ],
//         },
//       ],
//     },
//   ];

//   const closeSubMenu = () => {
//     setDesktopMenuOpen(false);
//     setSelectedCategory(null);
//   };
//   const openDesktopMenu = () => {
//     setDesktopMenuOpen((prev) => !prev);
//     setSelectedCategory(defaultCategory); 
//   };
//   return (
//     <>
//       <nav className="md:block hidden relative bg-violet-900">
//         <div className="mx-auto  h-12 w-full max-w-[1200px] items-center md:flex">
//           <button
//             onClick={openDesktopMenu}
//             className="ml-5 flex h-full w-40 cursor-pointer items-center justify-center bg-amber-400"
//           >
//             <div className="flex justify-around" href="#">
//               <RxHamburgerMenu className="mx-1 w-6 h-6" />
//               All categories
//             </div>
//           </button>
//           <div className="mx-7 flex gap-8">
//             {navItems.map((item, index) => (
//               <a
//                 key={index}
//                 className="font-light text-white duration-100 hover:text-yellow-400 hover:underline"
//                 href={item.href}
//               >
//                 {item.label}
//               </a>
//             ))}
//           </div>
//           <div className="ml-auto flex gap-4 px-5">
//             <a
//               className="font-light text-white duration-100 hover:text-yellow-400 hover:underline"
//               href="login.html"
//             >
//               Login
//             </a>
//             <span className="text-white">|</span>
//             <a
//               className="font-light text-white duration-100 hover:text-yellow-400 hover:underline"
//               href="sign-up.html"
//             >
//               Sign Up
//             </a>
//           </div>
//         </div>
//       </nav>
//       {desktopMenuOpen && (
//         <section
//           x-show="desktopMenuOpen"
//           className={`absolute left-0 right-0 z-10 w-full border-b border-r border-l bg-white ${
//             desktopMenuOpen ? "none" : "block"
//           } `}
//         >
//           <div className="hidden mx-auto md:flex max-w-[1200px] py-10">
//             <div className="w-[300px] border-r">
//               <ul className="px-5">
//                 {categories.map((category, index) => (
//                   <li
//                     key={index}
//                     className={`${
//                       selectedCategory === category.category
//                         ? "active:blue-900 bg-amber-400"
//                         : ""
//                     } flex items-center gap-2 py-2 px-3 hover:bg-neutral- `}
//                     onClick={() =>
//                       setSelectedCategory(
//                         selectedCategory === category.category
//                           ? null
//                           : category.category
//                       )
//                     }
//                   >
//                     {category.icon}
//                     {category.category}
//                     <span className="ml-auto">
//                       <IoMdArrowDropright className="h-4 w-4" />
//                     </span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//             <div className="flex w-full justify-between">
//               {selectedCategory && (
//                 <div className="flex gap-6">
//                   {categories
//                     .find((category) => category.category === selectedCategory)
//                     ?.menu.map((submenu, index) => (
//                       <div key={index} className="mx-5">
//                         <p className="font-medium text-gray-500">
//                           {submenu.title}
//                         </p>
//                         <ul className="leading-8 text-sm">
//                           {submenu.items.map((item, itemIndex) => (
//                             <li key={itemIndex} href={item.href}>
//                               <a href="">{item.label}</a>
//                             </li>
//                           ))}
//                         </ul>
//                       </div>
//                     ))}
//                 </div>
//               )}
//             </div>
//             <button onClick={closeSubMenu} className="absolute top-5 right-5">
//               <IoMdClose className="w-6 h-6" />
//             </button>
//           </div>
//         </section>
//       )}
//     </>
//   );
// };

// export default Allpros;



// import React from "react";
// import {
//   Box,
//   AppBar,
//   Tabs,
//   Tab,
//   Typography,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   IconButton,
//   Button,
// } from "@mui/material";
// import {
//   Email,
//   Phone,
//   Visibility,
//   CheckCircleOutline,
// } from "@mui/icons-material";

// const Allpros = () => {
//   const [tabIndex, setTabIndex] = React.useState(0);

//   const handleTabChange = (event, newValue) => {
//     setTabIndex(newValue);
//   };

//   const rows = Array(8).fill({
//     sno: "#001",
//     date: "17/11/2023 12:00",
//     name: "Akshat Singh",
//     country: "India",
//     phone: "+91 99999 99999",
//     email: "info@tatasons.com",
//     category: "Electronics, IoT Sensor",
//     product: "Lexus-32",
//     qty: "32",
//   });

//   return (
//     <Box sx={{ padding: 2, backgroundColor: "#f7faff", height: "100vh" }}>
//       <AppBar position="static" color="default" elevation={1}>
//         <Tabs
//           value={tabIndex}
//           onChange={handleTabChange}
//           indicatorColor="primary"
//           textColor="primary"
//           variant="fullWidth"
//         >
//           <Tab label="Inbox" />
//           <Tab label="New Leads (10+)" />
//           <Tab label="Chats (10+)" />
//           <Tab label="Converted" />
//           <Tab label="Dropped" />
//           <Tab label="RFQs" />
//         </Tabs>
//       </AppBar>

//       <Box sx={{ marginY: 2 }}>
//         <TableContainer component={Paper}>
//           <Table>
//             <TableHead sx={{ backgroundColor: "#e9f4ff" }}>
//               <TableRow>
//                 <TableCell>S.No</TableCell>
//                 <TableCell>Date/Time</TableCell>
//                 <TableCell>Name</TableCell>
//                 <TableCell>Contact Information</TableCell>
//                 <TableCell>Category</TableCell>
//                 <TableCell>Product</TableCell>
//                 <TableCell align="center">Qty</TableCell>
//                 <TableCell>Actions</TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {rows.map((row, index) => (
//                 <TableRow key={index}>
//                   <TableCell>{row.sno}</TableCell>
//                   <TableCell>{row.date}</TableCell>
//                   <TableCell>
//                     {row.name}
//                     <Typography
//                       variant="body2"
//                       sx={{ color: "gray", fontSize: "0.8rem" }}
//                     >
//                       {row.country}
//                     </Typography>
//                   </TableCell>
//                   <TableCell>
//                     <Box>
//                       <Typography
//                         variant="body2"
//                         sx={{ display: "flex", alignItems: "center" }}
//                       >
//                         <Phone fontSize="small" sx={{ marginRight: 1 }} />
//                         {row.phone}
//                       </Typography>
//                       <Typography
//                         variant="body2"
//                         sx={{ display: "flex", alignItems: "center" }}
//                       >
//                         <Email fontSize="small" sx={{ marginRight: 1 }} />
//                         {row.email}
//                       </Typography>
//                     </Box>
//                   </TableCell>
//                   <TableCell>{row.category}</TableCell>
//                   <TableCell>{row.product}</TableCell>
//                   <TableCell align="center">
//                     <Button
//                       variant="contained"
//                       size="small"
//                       sx={{
//                         backgroundColor: "#e7f8f0",
//                         color: "#28a745",
//                         fontWeight: "bold",
//                       }}
//                     >
//                       {row.qty}
//                     </Button>
//                   </TableCell>
//                   <TableCell>
//                     <IconButton color="primary">
//                       <Visibility />
//                     </IconButton>
//                     <IconButton sx={{ color: "#28a745" }}>
//                       <CheckCircleOutline />
//                     </IconButton>
//                   </TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </TableContainer>
//       </Box>
//     </Box>
//   );
// };

// export default Allpros;



