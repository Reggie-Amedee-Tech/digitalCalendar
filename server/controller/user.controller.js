const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports.register = (request, response) => {
    bcrypt.hash(request.body.password, 10)
    .then((hashedpassword) => {
        const user = User({
            firstName: request.body.firstName,
            lastName: request.body.lastName,
            email: request.body.email,
            password: hashedpassword
        })
        const token = jwt.sign({
            userId: user.userId,
        }, process.env.JWT_SECRET)
        user.save()
        .then(result => {
            response.status(201).send({message: "User Successfully registered", token, result})
        })
    })
    .catch((e) => {
        response.status(500).send({message: "password was not successfully registered"}, e)
    })
}

module.exports.login = (request, response) => {
    User.findOne({email: request.body.email})
    .then(user => {
        if (user === null) {
            response.status(400).json({message: "Invalid Email Address"})
        } else {
            bcrypt.compare(request.body.password, user.password)
            .then(passwordIsValid => {
                if (passwordIsValid) {
                    const token = jwt.sign({
                        userId: user._id,
                        userEmail: user.email
                    }, process.env.JWT_SECRET)
                    console.log(token)
                    response.cookie("RANDOM_TOKEN", token, process.env.JWT_SECRET, {
                        httpOnly: true,
                        expires: new Date(Date.now() + 90000)
                    })
                    .json({message: "Login Successfull", email: user.email, id: user._id, token})
                } else {
                    response.status(401).json({message: "Password is invalid"})
                }
            })
        }
    })
}

module.exports.logout = (request,response) => {
    response.clearCookie("RANDOM_TOKEN")
    response.json({message: "You have successfully logged out"})
}
