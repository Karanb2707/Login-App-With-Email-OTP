
//Register
export async function register(req, res) {
    res.json('Register');
}

//Login
export async function login(req, res) {
    res.json('Login');
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