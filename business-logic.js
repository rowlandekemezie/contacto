// const contact = require('./schema');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/contact-manager');

const contactSchema = mongoose.Schema({
	name: {type: String}
})

const Model = mongoose.model('Contact', contactSchema);

const getAllContacts = () => {
	Model.find({})
	.exec((err, contacts) => {
		console.log(contacts, 'contacts');
	})
}

const addContacts = () => {
	const newModel = {name: 'Excelent'};
	Model.create(newModel, (err, newuse) => {
		console.log('New contact added', newuse);	
	})
}
 
module.exports = { getAllContacts, addContacts }