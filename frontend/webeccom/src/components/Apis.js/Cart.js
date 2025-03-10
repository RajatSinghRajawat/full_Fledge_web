// import { useNavigate } from "react-router-dom";


// const navigate = useNavigate()


export const addCart = (id) => {
    try {
        // Get the token from localStorage
        const token = localStorage.getItem("token");

        // Check if the token exists
        if (!token) {
            console.log("No token found. Cannot add to cart.");
            // navigate('/register')
            return; // Exit the function if the token is missing
        }

        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "userId": "67441031faea89f5e1d847f2",
            "productId": id,
            "quantity": 2,
            "token": token // Use the token here
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        // Proceed with the fetch request
        fetch("http://localhost:5000/addtocart", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                console.log(result);
            })
            .catch((error) => console.error(error));

    } catch (error) {
        console.log(error);
    }
};


export const getCart = () => {
    try {
        const requestOptions = {
            method: "GET",
            redirect: "follow"
        };

        fetch("http://localhost:5000/getcart?userId=67441031faea89f5e1d847f2", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                console.log(result.cart);

            })
            .catch((error) => console.error(error));
    } catch (error) {

    }
}

export const removeCart = (id) => {
    try {
        const requestOptions = {
            method: "GET",
            redirect: "follow"
        };

        fetch(`http://localhost:5000/removeCart?userId=67441031faea89f5e1d847f2&productId=${id}`, requestOptions)
            .then((response) => response.json())
            .then((result) => console.log(result))
            .catch((error) => console.error(error));

    } catch (error) {
        console.log(error);

    }
}