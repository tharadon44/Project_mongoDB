const DataRoom = require("../models/dataroom_model");

exports.getdatarooms = async (req, res) => {
    try {
        const datarooms = await DataRoom.find();
        res.status(200).json(datarooms);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.getdataroomID = async (req, res) => {
    try {
        const { id } = req.params;
        const dataroom = await DataRoom.findById(id);
        res.status(200).json(dataroom);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.postdataroom = async (req, res) => {
    try {
        const { room_number,room_name} = req.body;
        const dataroom = new DataRoom({ room_number,room_name});
        const savedDataRoom = await dataroom.save();
        res.status(201).json(savedDataRoom);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.updatedataroom = async (req, res) => {
    try {
        const { id } = req.params;
        const dataroom = await DataRoom.findById(id);
        if (!dataroom) return res.status(404).json({ message: 'room not found' });
        const update = req.body;
        Object.assign(dataroom, update);
        const updateDataRoom = await dataroom.save();
        res.json(updateDataRoom);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.deletedataroom = async (req, res) => {
    try {
        const { id } = req.params;
        const dataroom = await DataRoom.findById(id);
        if (!dataroom) return res.status(404).json({ message: 'room not found' });
        await DataRoom.findByIdAndDelete(id);
        res.json({ message: 'room deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};