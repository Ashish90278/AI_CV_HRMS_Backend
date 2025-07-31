const Setting = require("../../../models/setting.model");

exports.getSettings = async (req, res) => {
    try {
        const settings = await Setting.find();
        res.status(200).json(settings);
    } catch (error) {
        res.status(500).json({ message: "Error fetching settings", error });
    }
}
exports.createSetting = async (req, res) => {
    try {
        const newSetting = new Setting(req.body);
        const savedSetting = await newSetting.save();
        res.status(201).json(savedSetting);
    } catch (error) {
        res.status(500).json({ message: "Error creating setting", error });
    }
}
