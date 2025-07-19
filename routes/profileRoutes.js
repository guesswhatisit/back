const express = require('express');
const router = express.Router();
const auth = require('../middlewares/authMiddleware');
const Profile = require('../models/profile');


router.get('/me', auth,async (req, res) => {
    const profile = await Profile.findOne({ user: req.user.userId})
    res.json(profile)
});

router.post('/', auth, async (req, res) => {
    const {bio, age, location} = req.body;
    const profile = await Profile.findOneAndUpdate(
        {user: req.user.userId},
        {bio, age,location, user: req.user.userid},
        {upsert: true, new: true}
    );
    res.json(profile)
});

router.delete('/', auth, async (req, res) => {
    await Profile.findOneAndDelete({user: req.user.userId});
    res.json({message: 'Profile deleted'})
});

module.exports = router;