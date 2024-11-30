const ProfileModel = require("../models/ProfileModal");




const addProfile = async (req, res) => {
  
    try {

        let profileImageArray = req.files.map((file) => file.filename);
        // console.log(profileImageArray, "aray");
        console.log(req.body, "aray");

        // var baseUrl = `http://${req.get("host")}`;
        // baseUrl += "/Uploads/" + req.files[0].filename;


        const { firstName   , phone, gender, dateOfBirth, address } = req.body
        console.log(req.user , "user")

        const date = new Date(dateOfBirth);
        console.log(date ,"dateeeee")
        const addProfile = await ProfileModel.create({
            firstName,
            profilePicture: profileImageArray ,
            phone, gender, dateOfBirth:date, address
        });
        await addProfile.save();

        res.send({ message: " All Profile Deatails added sucessfully ", addProfile })

    } catch (error) {
        console.log(error);

    }
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