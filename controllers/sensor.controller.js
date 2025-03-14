import { getAllData } from '../db/queries.js';

export const getSensorData = async (req, res) => {
    try {
        const data = await getAllData();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};