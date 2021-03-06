const mongoose = require('mongoose');
const config = require('config');
const winston = require('winston');

module.exports = function(){
    mongoose.set('useCreateIndex', true);
    mongoose.set('useNewUrlParser', true);
    mongoose.set('useUnifiedTopology', true);
    mongoose.set('useFindAndModify', false);

    mongoose.connect(`mongodb+srv://${config.get('dbUser')}:${config.get('dbPassword')}@cluster0-jmome.mongodb.net/${config.get('db')}`)
            .then(()=>winston.info('Connected to mongodb ....'))
}