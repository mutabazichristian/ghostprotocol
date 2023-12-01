const { Discussion } = require('../models/index');


const getDiscussions = async (req, res) => {
    const discussions = await Discussion.findAll();
    res.json(discussions);
}
const createDiscussion = async (req, res) => {
    const { prompt, duration, id } = req.body;
    try {
        const discussion = await Discussion.create({
            prompterId: id,
            prompt,
            duration
        })
        if (!discussion) {
            return res.status(400).json({ message: 'Discussion not created' });
        } else if (!!discussion) {
            return res.status(200).json({ message: 'discussion created' });
        }

    } catch (error) {
        console.log(error);
        res.json({ message: 'Internal server error' });
    }
}

module.exports = {
    createDiscussion,
    getDiscussions
}