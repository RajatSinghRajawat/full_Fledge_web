import { useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import Nav from '../../navigation/Nav';

const Profile = () => {
  const [currentSection, setCurrentSection] = useState('account'); // Tracks the current section
  const [accountDetails, setAccountDetails] = useState({
    name: 'Rajat',
    email: '7300382651raj@gmail.com',
    phone: '123-456-7890',
    address: '123 Main St, City, State, 12345',
    image: null,
  });

  const [name, setName] = useState("");
  const [ph, setph] = useState("");
  const [gender, setgender] = useState("");
  const [myfiles, setfiles] = useState("");
  const [myAddress, setAddress] = useState("");
  const [dOB, setdOB] = useState("");

  const [orders, setOrders] = useState([
    { id: 1, name: 'Product 1', price: 100 },
    { id: 2, name: 'Product 2', price: 200 },
    { id: 3, name: 'Product 3', price: 150 },
  ]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setAccountDetails((prevDetails) => ({
      ...prevDetails,
      image: URL.createObjectURL(file),
    }));
  };

  const handleImageDelete = () => {
    setAccountDetails((prevDetails) => ({
      ...prevDetails,
      image: null,
    }));
  };

  
  const updatedata = async (e) => {
    e.preventDefault();
    console.log("hello")
    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpvaG4uZG9lQGV4YW1wbGUuY29tIiwiaWF0IjoxNzMyNTEzODQxLCJleHAiOjE3MzI1MTc0NDF9._R9XUUl8pa14PbC5RkOsUANsf69sS-tjs_ijIkGvGas");

    const formdata = new FormData();
    formdata.append("firstName", "ravi");
    // formdata.append("phone", "7300382652");
    // formdata.append("gender", "Female");
    // formdata.append("files", fileInput.files[0], "postman-cloud:///1ef854eb-6aa1-4d80-b836-c60c711769a8");
    // formdata.append("address", "123 Main St York ");
    // formdata.append("dateOfBirth", "2005-09-23");

    const requestOptions = {
      method: "PUT",
      headers: myHeaders,
      body: formdata,
      redirect: "follow"
    };

    const res = await fetch("http://localhost:5000/update/676e7a9fe95f5f08369a19c2", requestOptions)
    const result = await res.json();
    console.log(result);
  }


  return (
    <>
      <Nav />
      <div className="min-h-screen bg-gray-900 text-white p-5">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between gap-5">
            {/* Sidebar */}
            <div className="bg-gray-800 p-5 rounded-lg w-full md:w-1/4">
              <h2 className="text-xl font-semibold mb-4">Profile</h2>
              <ul className="space-y-4">
                <li>
                  <button
                    onClick={() => setCurrentSection('orders')}
                    className={`hover:text-gray-400 ${currentSection === 'orders' && 'text-blue-500'}`}
                  >
                    My Orders
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setCurrentSection('account')}
                    className={`hover:text-gray-400 ${currentSection === 'account' && 'text-blue-500'}`}
                  >
                    My Account
                  </button>
                </li>
              </ul>
            </div>

            {/* Main Content */}
            <div className="flex-1 bg-gray-800 p-5 rounded-lg">
              {/* Conditional Rendering */}
              {currentSection === 'account' ? (
                // Account Details Section
                <div id="my-account">
                  <h3 className="text-lg font-medium mb-2">Account Details</h3>
                  <form className="space-y-4">
                    <div className="flex flex-col md:flex-row items-center gap-4">
                      {/* User Image Section */}
                      <div className="relative flex flex-col items-center">
                        {/* Display image or first letter of email */}
                        {accountDetails.image ? (
                          <img
                            src={accountDetails.image}
                            alt="User"
                            className="w-40 h-40 rounded-full object-cover mb-4"
                          />
                        ) : (
                          <div className="w-40 h-40 flex items-center justify-center bg-blue-600 text-white rounded-full mb-4 text-2xl">
                            {accountDetails.email.charAt(0).toUpperCase()}
                          </div>
                        )}

                        {/* Edit Image Icon */}
                        <label
                          htmlFor="file-upload"
                          className="absolute bottom-0 right-0 p-2 bg-gray-700 rounded-full cursor-pointer hover:bg-gray-600"
                        >
                          <FaEdit className="text-white" />
                        </label>
                        <input
                          type="file"
                          id="file-upload"
                          onChange={handleImageChange}
                          className="hidden"
                        />

                        {/* Delete Image Icon */}
                        {accountDetails.image && (
                          <button
                            onClick={handleImageDelete}
                            className="absolute top-0 right-0 p-2 bg-red-500 rounded-full cursor-pointer hover:bg-red-400"
                          >
                            <FaTrash className="text-white" />
                          </button>
                        )}
                      </div>

                      {/* Account Info */}
                      <div className="flex-1">
                        <div className="mb-4">
                          <label htmlFor="name" className="block text-sm">
                            Name
                          </label>
                          <input
                            type="text"
                            id="name"
                            value={accountDetails.name}
                            className="w-full p-2 bg-gray-700 rounded-lg text-white" onChange={(e) => { setName(e.target.value) }}
                          />
                        </div>
                        <div className="mb-4">
                          <label htmlFor="email" className="block text-sm">
                            Email
                          </label>
                          <input
                            type="email"
                            id="email"
                            value={accountDetails.email}
                            className="w-full p-2 bg-gray-700 rounded-lg text-white"
                          />
                        </div>
                        <div className="mb-4">
                          <label htmlFor="phone" className="block text-sm">
                            Phone
                          </label>
                          <input
                            type="text"
                            id="phone"
                            value={accountDetails.phone}
                            className="w-full p-2 bg-gray-700 rounded-lg text-white"
                          />
                        </div>
                        <div className="mb-4">
                          <label htmlFor="address" className="block text-sm">
                            Address
                          </label>
                          <textarea
                            id="address"
                            value={accountDetails.address}
                            className="w-full p-2 bg-gray-700 rounded-lg text-white"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Update Button */}
                    <button className="w-full p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700" onClick={updatedata}>
                      Update Account
                    </button>
                  </form>
                </div>
              ) : (
                // Orders Section
                <div id="my-orders">
                  <h3 className="text-lg font-medium mb-4">My Orders</h3>
                  <div className="space-y-4">
                    {orders.map((order) => (
                      <div
                        key={order.id}
                        className="flex justify-between items-center bg-gray-700 p-4 rounded-lg"
                      >
                        <span>{order.name}</span>
                        <span className="text-green-400">${order.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
