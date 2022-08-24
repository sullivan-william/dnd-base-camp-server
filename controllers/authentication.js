const router = require('express').Router()
const db = require('../models')
const bcrypt = require('bcrypt')

const { User } = db

router.post('/', async(req, res) => {
    try {
        let user = await User.findOne({
            where: { username: req.body.username }
        })
    
        if (!user || !await bcrypt.compare(req.body.password, user.password)) {
            res.status(404).json({
                message: 'Could not find a user with the provided username and password'
            })
        } else {
            res.status(200).json({ user })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
})

module.exports = router