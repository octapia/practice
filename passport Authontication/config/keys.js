
dbPassword = 'mongodb+srv://iftakher:'+ encodeURIComponent('passport') + '@CLUSTER_NAME_HERE.mongodb.net/passport?retryWrites=true';

module.exports = {
    mongoURI: dbPassword
};
