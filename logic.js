const mongoose = require('mongoose');
const assert = require('assert'); // N.B: Assert module comes bundled with NodeJS.
mongoose.Promise = global.Promise; // Allows us to use Native promises without throwing error.

// Connect to a single MongoDB instance. The connection string could be that of remote server
// We assign the connection instance to a constant to be used later in closing the connection
const db = mongoose.connect('mongodb://localhost:27017/contact-manager');

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
		console.info('New contact added');
		db.disconnect();
	});
};

/**
 * @function  [getContact]
 * @returns {Json} contacts
 */
const getContact = (name) => {
	Contact.find({$or: [{firstname: name}, {lastname: name}]})
	.exec((err, contact) => {
		assert.equal(null, err);
		console.info(contact);
		console.info(`${contact.length} matches`);
		db.disconnect();
	});
};

// This is not a BULK insert - the underlying mongoose implementation does loops through all of the elements and commits them one by one

/**
 * @function [addMultipleContacts]
 * @return {Array} contacts
 */
const addMultipleContacts = (contacts) => {
	Contact.create(contacts, (err, contacts) => {
		assert.equal(null, err);
		console.info(contacts, 'contacts')
		db.disconnect();
	})
}


/**
 * @function  [getContactList]
 * @returns {Sting} status
 */
const updateContact = (_id, contact) => {
	Contact.update({ _id }, contact)
	.exec((err, status) => {
		assert.equal(null, err);
		console.info('Updated successfully');
		db.disconnect();
	});
};

/**
 * @function  [deleteContact]
 * @returns {String} status
 */
const deleteContact = (_id) => {
	Contact.remove({ _id })
	.exec((err, status) => {
		assert.equal(null, err);
		console.info('Deleted successfully');
		db.disconnect();
	})
}

/**
 * @function  [getContactList]
 * @returns [contactlist] contacts
 */
const getContactList = () => {
	Contact.find()
	.exec((err, contacts) => {
		assert.equal(null, err);
		console.info(contacts);
		console.info(`${contacts.length} matches`);
		db.disconnect();
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
};

