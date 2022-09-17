import bcrypt from "bcrypt"
import UserModel from "../model/UserModel.js";

export const signup = async (req, res) => {
    const { email, password } = req.body;
    try {
        if (await UserModel.findOne({ email }) === null) {
            const salt = await bcrypt.genSalt(10);
            const hashPass = await bcrypt.hash(password, salt);

            const newUser = new UserModel({ email, password: hashPass });
            newUser.save()
            res.json({ email, hashPass, message: "user created" })

        } else {
            res.json({ error: "user already exists! Please log in" })
        }

    } catch (err) {
        res.json(err.message)
    }
}
export const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await UserModel.findOne({ email });
        const isValid = await bcrypt.compare(password, user.password)
        if (isValid) {
            res.json({ email, password, message: "user logged in" })
        } else {
            res.json({ error: "Password dosen't matched!" })
        }
    } catch (err) {
        res.json(err.message)
    }

}