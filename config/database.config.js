const urlDb = process.env.MONGODB_URI

module.exports = {
    url: 'mongodb://admin:admin@cluster0-shard-00-02.gezdg.mongodb.net:27017,admin:admin@cluster0-shard-00-02.gezdg.mongodb.net:27017,admin:admin@cluster0-shard-00-02.gezdg.mongodb.net:27017/myDB?ssl=true&replicaSet=atlas-5x4u5c-shard-0&authSource=admin&retryWrites=true&w=majority'
    // url: urlDb
}
