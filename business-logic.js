const mongoose = require('mongoose');
const assert = require('assert'); // N.B: Part of Nodejs core library
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/contact-manager');

// Create a contact Schema
const contactSchema = mongoose.Schema({
	name: {type: String}
})

// Define our model as an interface with the database
const Model = mongoose.model('Contact', contactSchema);


/**
 * @function  [addContact]
 * @returns [status]
 */
const addContact = ({}) => {
	const newModel = {name: 'Excelent'};
	Model.create(newModel, (err, newuse) => {
		assert.equal(null, err);
		console.log('New contact added', newuse);	
	})
}

/**
 * @function  [getContact]
 * @returns [contact]
 */
const getContact = (name) => {
	Model.find({$or: [{firstname: name}, {lastname: name}]})
	.exec((err, contact) => {
		assert.equal(null, err);
		console.log(contacts, 'contacts');
	})
}

// This is not a BULK insert - the underlying mongoose implementation does loops through all of the elements and commits them one by one

/**
 * @function [addMultipleContacts]
 * @return {Array} contacts
 */
const addMultipleContacts = (contacts) => {
	Model.create(contacts, (err, contacts) => {
		assert(null, err);
		console.log(contacts, 'contacts')
	})
}

/**
 * @function  [getContactList]
 * @returns [contactlist]
 */
const getContactList = () => {
	Model.find({})
	.exec((err, contacts) => {
		assert(null, err);
		console.log(contacts, 'contacts');
	})
}

/**
 * @function  [getContactList]
 * @returns [contactlist]
 */
const updateContact = () => {
	Model.find({})
	.exec((err, contacts) => {
		assert(null, err);
		console.log(contacts, 'contacts');
	})
}
 
// Export all methods
module.exports = {   
	addContact, 
  getContact, 
  addMultipleContacts, 
  getContactList,
  updateContact,
  deleteContact 
}