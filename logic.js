const mongoose = require('mongoose');
const assert = require('assert'); // N.B: Assert module comes bundled with NodeJS.
mongoose.Promise = global.Promise; // Allows us to use Native promises without throwing error.

// Connect to a single MongoDB instance. The connection string could be that of remote server
mongoose.connect('mongodb://localhost:27017/contact-manager');

// Define a contact Schema
const contactSchema = mongoose.Schema({
	firstname: { type: String },
	lastname: { type: String },
	phone: { type: String },
	email: { type: String }
});

// Define model as an interface with the database
const Contact = mongoose.model('Contact', contactSchema);


/**
 * @function  [addContact]
 * @returns {String} Status
 */
const addContact = (contact) => {
	Contact.create(contact, (err) => {
		assert.equal(null, err);
		console.log('New contact added');
		process.exit(0)
	});
};

/**
 * @function  [getContact]
 * @returns {Json} 
 */
const getContact = (name) => {
	Contact.find({$or: [{firstname: name}, {lastname: name}]})
	.exec((err, contact) => {
		assert.equal(null, err);
		console.log(contact);
		process.exit(0);
	});
};

// This is not a BULK insert - the underlying mongoose implementation does loops through all of the elements and commits them one by one

/**
 * @function [addMultipleContacts]
 * @return {Array} contacts
 */
const addMultipleContacts = (contacts) => {
	Contact.create(contacts, (err, contacts) => {
		assert(null, err);
		console.log(contacts, 'contacts')
	})
}

/**
 * @function  [getContactList]
 * @returns [contactlist]
 */
const getContactList = () => {
	Contact.find()
	.exec((err, contacts) => {
		console.log(err, contacts)
		assert.equal(null, err);
		console.log(contacts);
		process.exit(0);
	})
}

/**
 * @function  [getContactList]
 * @returns [contactlist]
 */
const updateContact = () => {
	Contact.find({})
	.exec((err, contact) => {
		assert(null, err);
		console.log(contact, 'updated contacts');
	})
}

/**
 * @function  [deleteContact]
 * @returns {String} status
 */
const deleteContact = (name) => {
	Contact.remove({$or: [{firstname: name }, {lastname: name}]})
	.exec((err, contact) => {
		assert(null, err);
		console.log(contact, 'deleted contact');
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