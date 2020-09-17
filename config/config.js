export default config = {
    env: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 3000,
    mongoUri: process.env.MONGODB_URI || 'mongodb://mongodb0.example.com:27017/react-fullstack-blog.user',
    jstSecret: process.env.JWT_SECRET || '2020@azad2##*$'
}