module.exports = {
    // Tell Vue to use a relative path in production and an absolute path in development
    publicPath: process.env.NODE_ENV === 'production' ? './' : '/'
}