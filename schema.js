const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/contact-manager');

const contactSchema = mongoose.Schema({
	name: {type: String}
})

module.exports = mongoose.model('Contact', contactSchema);