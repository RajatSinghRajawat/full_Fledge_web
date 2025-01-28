const ordersModel = require("../models/ordersModels");

const newOrder = async (req, res) => {
    try {
        const { shippingInfo, orderitems, paymentInfo, paidAt, itemPrice, taxPrice, shippingPrice, totalPrice, orderStatus } = req.body;

        const order = await ordersModel.create({
            shippingInfo,
            orderitems,
            paymentInfo,
            paidAt: Date.now(),
            itemPrice,
            taxPrice,
            shippingPrice,
            totalPrice,
            orderStatus,
            user: req.user, // Assuming `req.user` contains the authenticated user's ID
        });

        res.status(201).json({ message: "Order added successfully", order }); // Updated status code
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to add order", error: error.message }); // Add meaningful error message
    }
};


const getSingleOrder = async (req, res) => {
    const order = await ordersModel.findById(req.params.id).populate(
        "UserDetails", "name email"
    );
    if (!order) {
        return res.status(401).json("order not found")
    }

    res.status(200).json({ message: "order get successfully", order })

}
module.exports = {newOrder , getSingleOrder}
