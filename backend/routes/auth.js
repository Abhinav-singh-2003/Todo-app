const router = require("express").Router();
const User = require("../models/user");
const bcrypt = require("bcryptjs");

// sign up

router.post("/register", async (req, res) => {
    try {
        const { email, password, username } = req.body;
        const hashpassword = await bcrypt.hash(password, 10);
        const existing = await User.findOne({ email });
        if (existing) {
            return res.status(400).json({ message: "user already exists" });
        }
        const user = new User({ email, password: hashpassword, username });
        await user.save().then(() =>
            res.status(200).json({ user: user })
        );
    }
    catch (error) {
        res.status(400).json({ message: "error" });
    }
});

// sign in
router.post("/signin", async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "sign up first" });
        }
        const ismatch = await bcrypt.compare(password, user.password);
        if (!ismatch) {
            return res.status(400).json({ message: "wrong password" });
        }
        const { password: userPassword, ...others } = user._doc;
        res.status(200).json(others);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})




module.exports = router;




// auth is used to create the api routes for sign in and sign up means authentication..
//bcrypt is used to hash the password .. post is used to send and get data to the database 
// and lastly we used thunder bolt to test the  log in data and sign up data ,
// simple to use basically logic building aautht is important for api routing and 
// conn is used to connect the backend to the mongo db so that data can be stored and 
// fetched through the api router to server and then to the database and then back to the server
//  and then to the client...