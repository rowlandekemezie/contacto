#!/usr/bin/env node

const program = require('commander');
const { prompt } = require('inquirer');

const { 
  addContact, 
  getContact, 
  addMultipleContacts, 
  getContactList,
  updateContact,
  deleteContact  
} = require('./logic'); 

const questions = [
  {
    type : 'input',
    name : 'firstname',
    message : 'Enter firstname ..'
  },
  {
    type : 'input',
    name : 'lastname',
    message : 'Enter lastname ..'
  },
  {
    type : 'input',
    name : 'phone',
    message : 'Enter phone number ..'
  },
  {
    type : 'input',
    name : 'email',
    message : 'Enter email address ..'
  }

];

program
  .version('0.0.1')
  .description('Contact management system')

program
  .command('addContact')
  .alias('a')
  .description('Add a contact')
  .action(() => {
    prompt(questions).then((answers) =>
      addContact(answers));
  });

program
  .command('getContact <name>')
  .alias('r')
  .description('Get contact')
  .action(name => getContact(name));

program
  .command('updateContact <_id>')
  .alias('u')
  .description('Update contact')
  .action(_id => {
    prompt(questions).then((answers) =>
      updateContact(_id, answers));
  });

program
  .command('deleteContact <_id>')
  .alias('d')
  .description('Delete contact')
  .action(_id => deleteContact(_id));

program
  .command('getContactList')
  .alias('l')
  .description('List contacts')
  .action(() => getContactList());


// Assert that a VALID command is provided 
if (!process.argv.slice(2).length || !/[arudl]/.test(process.argv.slice(2))) {
  program.outputHelp();
  process.exit();
}
program.parse(process.argv)
    