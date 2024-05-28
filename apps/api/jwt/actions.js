const jwt = require("jsonwebtoken");

const KEY = 'secretkeyappearshere'

exports.signJwt = (email, id) => {
    return jwt.sign(
        {
            user_id: id,
            email: email,
        },
        KEY,
        {expiresIn: "365d"}
    )
}

exports.verifyJwt = (token, callback) => {
    jwt.verify(token, KEY, callback)
}