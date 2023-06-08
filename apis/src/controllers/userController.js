const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv')
const UserService = require('../services/userService')
dotenv.config();

const UserController = {
    register: async (req, res, next) => {
        try {
            const { password, confirmPassword } = req.body;
            if (password !== confirmPassword) {
                return res.status(400).json({ message: 'Passwords do not match' });
            }

            const data = {
                name: req.body.name,
                email: req.body.email,
                phoneNumber: req.body.phoneNumber,
                password: bcrypt.hashSync(req.body.password, 10)
            };

            const registerUser = await UserService.register(data);

            res.status(201).json(registerUser);
        } catch (err) {
            next(err);
        }
    },

    login: async (req, res, next) => {
        try {
            const { email, password } = req.body;

            const user = await UserService.findByEmail(email);
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }

            const match = await bcrypt.compare(password, user.password);
            if (!match) {
                return res.status(401).json({ message: 'Invalid credentials' });
            }

            // Criação do token JWT
            const accessToken = jwt.sign(
                { id: user._id, email: user.email },
                process.env.JWT_SECRET,
                { expiresIn: '1h' }
            );
            
            // Criação do refresh token
            const refreshToken = jwt.sign(
                { id: user._id, email: user.email },
                process.env.REFRESH_TOKEN_SECRET,
                { expiresIn: '30d' }
            );
            
            res.cookie('username', user.name, { maxAge: 30 * 24 * 60 * 60, httpOnly: true });
            res.cookie('accessToken', accessToken, { maxAge: 60 * 60, httpOnly: true });
            res.cookie('refreshToken', refreshToken, { maxAge: 30 * 24 * 60 * 60, httpOnly: true });
            
            res.status(200).json({ user, accessToken, refreshToken });
        } catch (err) {
            next(err);
        }
    }
};

module.exports = UserController;