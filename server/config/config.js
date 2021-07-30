const env = process.env.NODE_ENV || 'development';

const config = {
    development: {
        port: process.env.PORT || 9999,
        dbURL: 'mongodb+srv://guest21:bonethug1@cluster0.iopnn.mongodb.net/media',
        authCookieName: 'x-auth-token'
    },
    production: {}
};

module.exports = config[env];