const DataTool = require("../models/datatool_model");

exports.getdatatools = async (req, res) => {
    try {
        const datatools = await DataTool.find();
        res.status(200).json(datatools);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.getdatatoolID = async (req, res) => {
    try {
        const { id } = req.params;
        const datatool = await DataTool.findById(id);
        res.status(200).json(datatool);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.postdatatool = async (req, res) => {
    try {
        const { tool_number,tool_name} = req.body;
        const datatool = new DataTool({ tool_number,tool_name});
        const savedDataTool = await datatool.save();
        res.status(201).json(savedDataTool);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.updatedatatool = async (req, res) => {
    try {
        const { id } = req.params;
        const datatool = await DataTool.findById(id);
        if (!datatool) return res.status(404).json({ message: 'tool not found' });
        const update = req.body;
        Object.assign(datatool, update);
        const updateDataTool = await datatool.save();
        res.json(updateDataTool);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.deletedatatool = async (req, res) => {
    try {
        const { id } = req.params;
        const datatool = await DataTool.findById(id);
        if (!datatool) return res.status(404).json({ message: 'tool not found' });
        await DataTool.findByIdAndDelete(id);
        res.json({ message: 'tool deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};