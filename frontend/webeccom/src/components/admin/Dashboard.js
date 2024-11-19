import React, { useEffect, useState } from 'react';
import './dashboard.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField, Grid, Paper } from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const Dashboard = () => {
    const [activeTab, setActiveTab] = useState('Settings');
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [productName, setProductName] = useState('');
    const [description, setDescription] = useState('');
    const [discount, setDiscount] = useState('');
    const [price, setPrice] = useState('');
    const [reducedMRP, setReducedMRP] = useState('');
    const [color, setColor] = useState('');
    const [size, setSize] = useState('');
    const [specialization, setSpecialization] = useState('');
    const [soldBy, setSoldBy] = useState('');
    const [leadTime, setLeadTime] = useState('');
    const [responseRate, setResponseRate] = useState('');
    const [features, setFeatures] = useState('');
    const [Categories_id, setCategories_id] = useState('');
    const [Categories_name, setCategories_name] = useState('');
    const [Myfiles, setFiles] = useState();

    const [ProductDetails, setProductDetails] = useState(' ')

    // Handle file selection
    //   const handleFileChange = (e) => {
    //     setFiles(e);
    //   };

    const addProducts = (e) => {
        console.log(e)
        e.preventDefault();
        try {
            console.log(Myfiles)
            const formdata = new FormData();
            formdata.append("productName", productName);
            formdata.append("description", description);
            formdata.append("discount", discount);
            formdata.append("price", price);
            formdata.append("reducedMRP", reducedMRP);
            formdata.append("color", color);
            formdata.append("size", size);
            formdata.append("specialization", specialization);
            formdata.append("soldBy", soldBy);
            formdata.append("leadTime", leadTime);
            formdata.append("responseRate", responseRate);
            formdata.append("features", features);
            formdata.append("Id", Categories_id);
            formdata.append("name", Categories_name);
            formdata.append("files", Myfiles);

            const requestOptions = {
                method: 'POST',
                body: formdata,
                redirect: 'follow',
            };

            fetch('http://localhost:5000/multer', requestOptions)
                .then((response) => response.json())
                .then((result) => {
                    getProduct()
                })
                .catch((error) => console.error(error));

        } catch (error) {
            console.error(error);
        }
    };

    const getProduct = () => {
        try {
            const requestOptions = {
                method: "GET",
                redirect: "follow"
            };

            fetch("http://localhost:5000/getProduct?productName=Iphone 16", requestOptions)
                .then((response) => response.json())
                .then((result) => {
                    setProductDetails(result.products)
                })
                .catch((error) => console.error(error));
        } catch (error) {

        }
    }

    useEffect(() => {
        getProduct()
    }, [])

    return (
        <>
            <div className="dashboard-container bg-black text-light">
                <div className="sidebar">
                    <div>
                        <div className="logo">Acme Inc</div>
                        <ul className="menu">
                            <li
                                className={`menu-item ${activeTab === 'Products' ? 'active' : ''}`}
                                onClick={() => setActiveTab('Products')}
                            >
                                Products
                            </li>
                            <li
                                className={`menu-item ${activeTab === 'Categories' ? 'active' : ''}`}
                                onClick={() => setActiveTab('Categories')}
                            >
                                Categories
                            </li>
                            <li
                                className={`menu-item ${activeTab === 'Order' ? 'active' : ''}`}
                                onClick={() => setActiveTab('Order')}
                            >
                                Return&Order
                            </li>
                            <li
                                className={`menu-item ${activeTab === 'Placed' ? 'active' : ''}`}
                                onClick={() => setActiveTab('Placed')}
                            >
                                Placed
                            </li>
                        </ul>
                    </div>
                    <div className="profile-section">
                        <img
                            src="https://via.placeholder.com/40"
                            alt="Profile"
                            className="profile-pic"
                        />
                        <p>shadcn</p>
                        <span>m@example.com</span>
                    </div>
                </div>

                <div className="main-content">
                    <div className="header">
                        <div className='d-flex justify-between'>
                            <div>
                                <h3>{activeTab}</h3>
                            </div>
                            <div>
                                <Button onClick={handleOpen}>Open modal</Button>

                            </div>
                        </div>
                    </div>
                    <div className="content-area">
                        {
                            activeTab === 'Products' ? (
                                <div className="card">
                                    Products
                                    <div>
                                        <div className='container'>
                                            <div className="row">
                                                {

                                                    ProductDetails.map((products, index) => {
                                                        return (
                                                            <>

                                                                <div className="col-lg-4 mt-1">
                                                                    <Card sx={{ maxWidth: 345 }}>
                                                                        <CardActionArea>
                                                                            <CardMedia
                                                                                component="img"
                                                                                height="140"
                                                                                image="/static/images/cards/contemplative-reptile.jpg"
                                                                                alt="green iguana"
                                                                            />
                                                                            <CardContent>
                                                                                <Typography gutterBottom variant="h5" component="div">
                                                                                    {products.productName}
                                                                                </Typography>
                                                                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                                                                    {products.description}
                                                                                </Typography>
                                                                            </CardContent>
                                                                        </CardActionArea>
                                                                    </Card>
                                                                </div>

                                                            </>
                                                        )
                                                    })
                                                }
                                            </div >
                                        </div>

                                    </div>
                                </div>
                            ) : (
                                <div className="card">Select a Tab</div>
                            )
                        }
                    </div>
                </div>
            </div>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Product Details
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <Box sx={{ width: '100%', height: '100vh', overflow: 'auto' }}>
                            <Paper sx={{ maxWidth: 800, margin: '0 auto', padding: 3, overflow: 'auto', height: '80vh' }}>
                                <Typography variant="h5" sx={{ marginBottom: 3 }}>
                                    Add Product Details
                                </Typography>
                                <form onSubmit={addProducts}>
                                    <Grid container spacing={2}>
                                        {/* Product Name */}
                                        <Grid item xs={12}>
                                            <TextField
                                                fullWidth
                                                label="Product Name"
                                                value={productName}
                                                onChange={(e) => setProductName(e.target.value)}
                                            />
                                        </Grid>
                                        {/* Description */}
                                        <Grid item xs={12}>
                                            <TextField
                                                fullWidth
                                                label="Description"
                                                value={description}
                                                onChange={(e) => setDescription(e.target.value)}
                                                multiline
                                                rows={4}
                                            />
                                        </Grid>
                                        {/* Discount */}
                                        <Grid item xs={6}>
                                            <TextField
                                                fullWidth
                                                label="Discount"
                                                value={discount}
                                                onChange={(e) => setDiscount(e.target.value)}
                                            />
                                        </Grid>
                                        {/* Price */}
                                        <Grid item xs={6}>
                                            <TextField
                                                fullWidth
                                                label="Price"
                                                value={price}
                                                onChange={(e) => setPrice(e.target.value)}
                                            />
                                        </Grid>
                                        {/* Reduced MRP */}
                                        <Grid item xs={6}>
                                            <TextField
                                                fullWidth
                                                label="Reduced MRP"
                                                value={reducedMRP}
                                                onChange={(e) => setReducedMRP(e.target.value)}
                                            />
                                        </Grid>
                                        {/* Color */}
                                        <Grid item xs={6}>
                                            <TextField
                                                fullWidth
                                                label="Color"
                                                value={color}
                                                onChange={(e) => setColor(e.target.value)}
                                            />
                                        </Grid>
                                        {/* Size */}
                                        <Grid item xs={6}>
                                            <TextField
                                                fullWidth
                                                label="Size"
                                                value={size}
                                                onChange={(e) => setSize(e.target.value)}
                                            />
                                        </Grid>
                                        {/* Specialization */}
                                        <Grid item xs={12}>
                                            <TextField
                                                fullWidth
                                                label="Specialization"
                                                value={specialization}
                                                onChange={(e) => setSpecialization(e.target.value)}
                                            />
                                        </Grid>
                                        {/* Sold by */}
                                        <Grid item xs={6}>
                                            <TextField
                                                fullWidth
                                                label="Sold By"
                                                value={soldBy}
                                                onChange={(e) => setSoldBy(e.target.value)}
                                            />
                                        </Grid>
                                        {/* Lead Time */}
                                        <Grid item xs={6}>
                                            <TextField
                                                fullWidth
                                                label="Lead Time"
                                                value={leadTime}
                                                onChange={(e) => setLeadTime(e.target.value)}
                                            />
                                        </Grid>
                                        {/* Response Rate */}
                                        <Grid item xs={6}>
                                            <TextField
                                                fullWidth
                                                label="Response Rate"
                                                value={responseRate}
                                                onChange={(e) => setResponseRate(e.target.value)}
                                            />
                                        </Grid>
                                        {/* Features */}
                                        <Grid item xs={6}>
                                            <TextField
                                                fullWidth
                                                label="Features"
                                                value={features}
                                                onChange={(e) => setFeatures(e.target.value)}
                                            />
                                        </Grid>
                                        {/* Category */}
                                        <Grid item xs={6}>
                                            <TextField
                                                fullWidth
                                                label="Categories ID"
                                                value={Categories_id}
                                                onChange={(e) => setCategories_id(e.target.value)}
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <TextField
                                                fullWidth
                                                label="Categories ID"
                                                value={Categories_name}
                                                onChange={(e) => setCategories_name(e.target.value)}
                                            />
                                        </Grid>

                                        <Grid item xs={12}>
                                            {/* <input type="file" multiple onChange={handleFileChange} /> */}
                                            <input type="file" onClick={() => { console.log("hello") }} onChange={(e) => { setFiles(e.target.files[0]) }} />
                                        </Grid>
                                    </Grid>
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        sx={{ marginTop: 2 }}
                                    >
                                        Add Product
                                    </Button>
                                </form>
                            </Paper>
                        </Box>
                    </Typography>

                </Box>
            </Modal>
        </>
    );
};

export default Dashboard;
