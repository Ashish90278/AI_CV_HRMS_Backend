const Interview = require("../../../models/interview.model");

exports.getInterviews = async (req, res) => {
    try {
        const interviews = await Interview.find();
        res.status(200).json(interviews);
    } catch (error) {
        res.status(500).json({ message: "Error fetching interviews", error });
    }
}   

exports.createInterview = async (req, res) => {
    try {
        const newInterview = new Interview(req.body);
        await newInterview.save();
        res.status(201).json(newInterview);
    } catch (error) {
        res.status(500).json({ message: "Error creating interview", error });
    }
}   

