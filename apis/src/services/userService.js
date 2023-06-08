const { User } = require('../model/user');
const dbConnection = require('../config/database/database');

const UserService = {
    register: async (data) => {
        try {
            await dbConnection();
            const registerUser = await User.create(data);
            return registerUser;
        } catch (err) {
            throw err;
        }
    },
    findByEmail: async (email) => {
        try {
            await dbConnection();
            const user = await User.findOne({ email });
            return user;
        } catch (err) {
            throw err;
        }
    }
};

module.exports = UserService;