const addCart = () => {
    try {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "userId": "67441031faea89f5e1d847f2",
            "productId": "6741e1db8130ec547f23347b",
            "quantity": 2
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        fetch("http://localhost:5000/addtocart", requestOptions)
            .then((response) => response.json())
            .then((result) => console.log(result))
            .catch((error) => console.error(error));

    } catch (error) {
        console.log(error);
        
    }
}