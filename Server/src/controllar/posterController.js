const posterModel = require("../models/Poster");


const addPoster = async (req, res) => {
    try {
        const { title, description } = req.body;

        // Check if files are uploaded
        if (!req.files || req.files.length === 0) {
            return res.status(400).json({ message: 'Image files are required.' });
        }

        let PosterimageArray = req.files.map((file) => file.filename);

        // Construct image URLs
        var baseUrl = `http://${req.get("host")}`;
        baseUrl += "/Uploads/" + req.files[0].filename;

        console.log(baseUrl);
        

        // Validate title and images
        if (!title) {
            return res.status(400).json({ message: 'Title is required.' });
        }

        // Create a new poster
        const addPoster = await posterModel.create({
            title,
            description,
            image: PosterimageArray,
        });

        // Send a success response
        res.status(201).json({ message: 'Poster created successfully!', poster: addPoster });

    } catch (error) {
        // Handle unexpected errors
        res.status(500).json({ error: error.message });
    }
};


const getPoster = async (req, res) => {
    try {
        const posters = await posterModel.find();
        res.status(200).json({ message: 'POster added successfully', poster: posters });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }

}

const updatePoster = async (req, res) => {
    try {
        const { title, description, image } = req.body;

        const poster = await posterModel.findById(req.params.id);

        if (!poster) {
            return res.status(404).json({ message: 'Poster not found.' });
        }

        poster.title = title || poster.title;
        poster.description = description || poster.description;
        poster.image = image || poster.image;

        await poster.save();
        res.status(200).json({ message: 'Poster updated successfully!', poster });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


const deletePoster = async (req, res) => {
    try {
        const poster = await posterModel.findByIdAndDelete(req.params.id);

        if (!poster) {
            return res.status(404).json({ message: 'Poster not found.' });
        }

        res.status(200).json({ message: 'Poster deleted successfully!' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = { addPoster, getPoster, updatePoster, deletePoster }