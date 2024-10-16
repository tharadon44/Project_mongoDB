const Tool = require("../models/tool");

exports.getTools = async (req, res) => {
    try {
        const tools = await Tool.find();
        res.status(200).json(tools);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.getToolID = async (req, res) => {
    try {
        const { id } = req.params;
        const tool = await Tool.findById(id);
        res.status(200).json(tool);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.postTool = async (req, res) => {
    try {
        const { date_time, time_in, time_out,tool_name,user_name,phone,objective,adviser } = req.body;
        const tool = new Tool({ date_time, time_in, time_out,tool_name,user_name,phone,objective,adviser });
        const savedTool = await tool.save();
        res.status(201).json(savedTool);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.updateTool = async (req, res) => {
    try {
        const { id } = req.params;
        const tool = await Tool.findById(id);
        if (!tool) return res.status(404).json({ message: 'Tool not found' });
        const update = req.body;
        Object.assign(tool, update);
        const updatedTool = await tool.save();
        res.json(updatedTool);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.deleteTool = async (req, res) => {
    try {
        const { id } = req.params;
        const tool = await Tool.findById(id);
        if (!tool) return res.status(404).json({ message: 'Tool not found' });
        await Tool.findByIdAndDelete(id);
        res.json({ message: 'tool deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};