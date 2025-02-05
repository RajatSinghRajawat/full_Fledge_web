import React, { useEffect, useState } from 'react';

const AllUser = () => {
    const [users, setUsers] = useState([]);

    const Getuser = async () => {
        try {
            const response = await fetch("http://localhost:5000/get");
            const result = await response.json();
            setUsers(result.getUsers);
        } catch (error) {
            console.error(error);
        }
    };


    useEffect(() => {
        Getuser();
    }, []);

    return (
        <div>
            <h2>All Users</h2>

            <div className="container mx-auto p-4">
                <h2 className="text-2xl font-semibold text-center mb-6 text-black">User List</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {users?.map((user, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-lg rounded-2xl p-6 transition-transform transform hover:scale-105"
                        >
                            <img
                                src={user.profilePicture && user.profilePicture !== ""
                                    ? `http://localhost:5000/${user.profilePicture}`
                                    : 'https://img.lovepik.com/png/20231031/Long-haired-girl-profile-face-beauty-haircut-beautiful-girls-Long_429463_wh860.png'} // Default image if no profile picture
                                alt="Profile"
                                style={{ width: '150px', height: '150px', objectFit: 'cover' }}
                            />
                            <h3 className="text-lg font-semibold text-black">{user.firstName}</h3>
                            <p className="text-black">{user.email}</p>
                        </div>
                    ))}


                </div>
            </div>

        </div>
    );
};

export default AllUser;
