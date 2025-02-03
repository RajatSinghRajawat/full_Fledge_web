import { useEffect, useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import Nav from '../../navigation/Nav';

const Profile = () => {
  const [data,setdata] = useState();
 
  const [profileData, setProfileData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    gender: '',
    dateOfBirth: '',
    image: null,
  });

  const [imagePreview, setImagePreview] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileData((prevData) => ({ ...prevData, image: file }));
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleImageDelete = () => {
    setProfileData((prevData) => ({ ...prevData, image: null }));
    setImagePreview(null);
  };

  const updateProfile = async (e) => {
    e.preventDefault();
    console.log("Updating profile...");
    const formData = new FormData();
    Object.keys(profileData).forEach((key) => {
      if (profileData[key]) {
        formData.append(key, key === "image" ? profileData[key] : profileData[key]);
      }
    });

    try {
      const response = await fetch("http://localhost:5000/update/676e7a9fe95f5f08369a19c2", {
        method: "PUT",
        body: formData,
      });
      const result = await response.json();
      console.log("Profile updated:", result);
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };


  const getData = async ()=>{
    const requestOptions = {
      method: "GET",
      redirect: "follow"
    };
    
    const result = await fetch("http://localhost:5000/getDetails/676e7a9fe95f5f08369a19c2", requestOptions)
    const res = await result.json();
    setdata(res)
    console.log(res.Message.profilePicture[0],'********************************')
    setImagePreview(res.Message.profilePicture[0])
    // setname(res.firstName)
    // setphone(res.phone);
    // setgender(res.gender);
    // setdob(res.dateOfBirth);
    // setaddress(res.address);
    // setEmail(res.email);
    // setimage(res.profilePicture);
    // console.log(res)  
  }

  useEffect(()=>{
    getData();
  },[])

  return (
    <>
      <Nav />
      <div className="min-h-screen bg-gray-900 text-white p-5">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex flex-col md:flex-row gap-5">
            <div className="bg-gray-800 p-5 rounded-lg w-full md:w-1/4">
              <h2 className="text-xl font-semibold mb-4">Profile</h2>
              <ul className="space-y-4">
                <li>
                  <button onClick={() => setProfileData({ ...profileData, currentSection: 'orders' })} className={profileData.currentSection === 'orders' ? 'text-blue-500' : 'hover:text-gray-400'}>My Orders</button>
                </li>
                <li>
                  <button onClick={() => setProfileData({ ...profileData, currentSection: 'account' })} className={profileData.currentSection === 'account' ? 'text-blue-500' : 'hover:text-gray-400'}>My Account</button>
                </li>
              </ul>
            </div>

            <div className="flex-1 bg-gray-800 p-5 rounded-lg">
              {profileData.currentSection === 'account' ? (
                <form onSubmit={updateProfile} className="space-y-4">
                  <h3 className="text-lg font-medium mb-2">Account Details</h3>
                  <div className="flex flex-col md:flex-row items-center gap-4">
                    <div className="relative flex flex-col items-center">
                      {imagePreview ? (
                        <img src={`http://localhost:5000/${imagePreview}`} alt="User" className="w-40 h-40 rounded-full object-cover mb-4" />
                      ) : (
                        <div className="w-40 h-40 flex items-center justify-center bg-blue-600 text-white rounded-full mb-4 text-2xl">
                          {profileData.email.charAt(0).toUpperCase()}
                        </div>
                      )}
                      <label htmlFor="file-upload" className="absolute bottom-0 right-0 p-2 bg-gray-700 rounded-full cursor-pointer">
                        <FaEdit className="text-white" />
                      </label>
                      <input type="file" id="file-upload" name="fileInput" className="hidden" onChange={handleImageChange} />
                      {imagePreview && (
                        <button type="button" onClick={handleImageDelete} className="absolute top-0 right-0 p-2 bg-red-500 rounded-full">
                          <FaTrash className="text-white" />
                        </button>
                      )}
                    </div>
                    <div className="flex-1">
                      {['firstName', 'phone', 'gender', 'dateOfBirth', 'address', 'email'].map((field) => {
                        console.log(data,'*****************************')
                        return (
                        
                          <div key={field} className="mb-4">
                            <label htmlFor={field} className="block text-sm capitalize">{field}</label>
                            <input
                              type={field === 'dateOfBirth' ? 'date' : 'text'}
                              id={field}
                              name={field}
                              value={data.Message[field]}
                              className="w-full p-2 bg-gray-700 rounded-lg text-white"
                              onChange={handleInputChange}
                            />
                          </div>
                        )
                      }
                      
                      )}
                    </div>
                  </div>
                  <button type="submit" className="w-full p-3 bg-blue-600 rounded-lg hover:bg-blue-700">Update Account</button>
                </form>
              ) : (
                <div>
                  <h3 className="text-lg font-medium mb-4">My Orders</h3>
                  <div className="space-y-4">
                    {profileData.orders?.map((order) => (
                      <div key={order.id} className="flex justify-between bg-gray-700 p-4 rounded-lg">
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
