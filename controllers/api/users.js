const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const User = require('../../models/user')

module.exports = {
    create,
    login
}

async function create(req, res) {
    try {
        // Add user to database
        const user = await User.create(req.body)
        //token will be string
        const token = createJWT(user)
        res.join(token)
    } catch (err) {
        res.status(400).json(err)
    }
}

async function login(req, res) {
    try {
        // Find user by name
        const user = await User.findOne({name: req.body.name})
        if (!user) throw new Error()
        // check password match
        const match = await bcrypt.compare(req.body.password, user.password)
        if (!match) throw new Error()
        res.json(createJWT(user))
    } catch {
        res.status(400).json('Bad Credentials')
    }
}

// Helper Functions
function createJWT(user) {
    return jwt.sign(
        //data payload
        {user},
        process.env.SECRET,
        {expiresIn: '24h'}
    )
}