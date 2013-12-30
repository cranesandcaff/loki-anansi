module.exports = {
    port: process.env.PORT || 9000,
    db: process.env.MONGOLAB_URI ||
    process.env.MONGOHQ_URL ||
    'mongodb://admin:trickstergods@linus.mongohq.com:10035/lokiAnansi'
}