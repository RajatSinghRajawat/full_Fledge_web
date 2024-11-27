const ProfileModel = require("../models/ProfileModal");




const addProfile = async (req, res) => {
    console.log(req.body)
    console.log(req.files)
    // try {

    //     let profileImageArray = req.files.map((file) => file.filename);
    //     console.log(profileImageArray, "aray");

    //     // var baseUrl = `http://${req.get("host")}`;
    //     // baseUrl += "/Uploads/" + req.files[0].filename;


    //     const { firstName, profilePicture, phone, gender, dateOfBirth, address } = req.body


    //     const addProfile = await ProfileModel.create({
    //         firstName,
    //         profilePicture: profileImageArray ,
    //         phone, gender, dateOfBirth, address
    //     });
    //     await addProfile.save();

    //     res.send({ message: "Profile Deatails added sucessfully", addProfile })

    // } catch (error) {
    //     console.log(error);

    // }
};



const getAllProfiles = async (req, res) => {
    try {
        const profiles = await ProfileModel.find().populate('firstName');
        res.status(200).json({ message: 'Profiles retrieved successfully', data: profiles });
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving profiles', error: error.message });
    }
};


module.exports = { addProfile, getAllProfiles }