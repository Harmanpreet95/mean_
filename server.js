
var express = require('express');
mongoose = require('mongoose'),
app = express();
require('./server/routes')(app);


var passport = require('passport');
require('./server/passport')(passport);   // this file is defined below
app.use(passport.initialize());
app.use(passport.session());
//---live connection
mongoose.connect('mongodb://Harmanpreet:Harman123@ds159776.mlab.com:59776/nodetest');

//mongoose.connect('mongodb://localhost:27017/mean_db'); //--localConnection

mongoose.connection.on('open', function() {
    console.log('Mongoose connected');
});

app.set('view engine', 'ejs');

// Start server
app.listen(3000, function() {
    console.log('Server listening on port ' + 3000)
});
