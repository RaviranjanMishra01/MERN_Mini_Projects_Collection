const user = require("../model/registeruser")

exports.getHome = (req, res) => {
    res.render("index")
}

exports.getLogin = (req, res) => {
    console.log("welcome to login page");
    res.render("login");
};

exports.postLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log("user login data", req.body);
        const existingUser = await user.findOne({email})
        if(!existingUser)
        {
            console.error("user not found")
            res.redirect("/register")
        }
        if(existingUser.password !== password)
        {
            console.error("Wrong password")
            res.redirect("/login")
        }
        console.log("login successfully")
        return res.render("newuser", { user: existingUser });
    } catch (error) {
        console.error("server error ", error)
    }
};

exports.getRegister = (req, res) => {
    console.log("welcome to register page");
    res.render("register");   // correct
};

exports.postRegister = async (req, res) => {
    // console.log("register success");
    const data = req.body;
    console.log(data)
    await user.create(data)
    res.render("index")
};

exports.getForgot = (req, res) => {
    console.log("forgot password page");
    res.render("forgot");
};

exports.getNewUser = async (req, res) => {
    // demo ke liye first user fetch
    const existingUser = await user.findOne();

    res.render("newuser", { user: existingUser });
};