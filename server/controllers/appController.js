import UserModel from "../model/User.model.js";
import bcrypt from 'bcrypt';

//Register
export async function register(req, res) {
    try {
        const { username, password, profile, email } = req.body;

        // Check for existing username
        const existUsername = await UserModel.findOne({ username });
        if (existUsername) {
            return res.status(400).send({ error: "Please use a unique username" });
        }

        // Check for existing email
        const existEmail = await UserModel.findOne({ email });
        if (existEmail) {
            return res.status(400).send({ error: "Please use a unique email" });
        }

        // Hash the password and create the user
        if (password) {
            const hashedPassword = await bcrypt.hash(password, 10);

            const user = new UserModel({
                username,
                password: hashedPassword,
                profile: profile || '',
                email
            });

            // Save user and return success response
            const result = await user.save();
            return res.status(201).send({ msg: "User registered successfully" });
        } else {
            return res.status(400).send({ error: "Password is required" });
        }
        
    } catch (error) {
        console.error("Error during registration:", error);
        return res.status(500).send({ error: "Internal server error" });
    }
}

//Login
export async function login(req, res) {
    try {
        const { username, password } = req.body;

        const existUsername = await UserModel.findOne({ username });

        // Check if the username exists
        if (!existUsername) {
            return res.status(400).send({ error: "Username not found" });
        }

        // Check if the password matches
        const passCheck = await bcrypt.compare(password, existUsername.password);
        if (!passCheck) {
            return res.status(400).send({ error: "Password does not match" });
        }

        // If both username and password are correct
        return res.status(200).send({ message: "Login successful" });

    } catch (error) {
        console.error("Error during login:", error);
        return res.status(500).send({ error: "Internal server error" });
    }
}

//Get User
export async function getUser(req, res) {
    res.json('Get User');
}

//Update User
export async function updateUser(req, res) {
    res.json('Update User');
}

//Generate OTP
export async function generateOTP(req, res) {
    res.json('Generate OTP');
}

//Verify OTP
export async function verifyOTP(req, res) {
    res.json('Verify OTP');
}

//Reset Session
export async function createResetSession(req, res) {
    res.json('Create Reset Session');
}

//Reset Password
export async function resetPassword(req, res) {
    res.json('Reset Password');
}