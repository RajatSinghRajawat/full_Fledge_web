import React from 'react';
import { useSelector } from 'react-redux';

const Logout = () => {
    const { email, password } = useSelector((state) => state.user);

    const logout = async () => {
        try {
            const myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            const raw = JSON.stringify({ email, password });

            const requestOptions = {
                method: "POST",
                headers: myHeaders,
                body: raw,
                redirect: "follow",
            };

            const response = await fetch("http://localhost:5000/LogOutUser", requestOptions);

            if (response.ok) {
                const result = await response.json();
                console.log("Logout Successful:", result);
                alert("Logout Successful!");
            } else {
                console.error("Logout Failed:", response.statusText);
                alert("Logout Failed!");
            }
        } catch (error) {
            console.error("Error during logout:", error);
            alert("An error occurred. Please try again.");
        }
    };

    return (
        <div>
            <button onClick={logout}>Logout</button>
        </div>
    );
};

export default Logout;
