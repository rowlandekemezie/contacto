const program = require('commander');
const { prompt } = require('inquirer');

const { 
  addContact, 
  getContact, 
  addMultipleContacts, 
  getContactList,
  updateContact,
  deleteContact  
} = require('./business-logic'); 

const questions = [
  {
    type : 'input',
    name : 'firstname',
    message : 'Contact\'s firstname ..?'
  },
  {
    type : 'input',
    name : 'lastname',
    message : 'Contact\'s lastname ..?'
  },
  {
    type : 'input',
    name : 'phone no',
    message : 'Contact\'s phone number ..?'
  },
  {
    type : 'input',
    name : 'email address',
    message : 'Contact\'s email address ..?'
  }

];

program
  .version('0.0.1')
  .description('Contact management system')

program
  .command('addContact')
  .alias('ac')
  .description('Add a contact')
  .action(() => {
    prompt(questions).then((answers) =>
      addContact(answers)
    );
  });

program
  .command('getContact <name>')
  .alias('gc')
  .description('Get contact')
  .action((name) => {
    getContact(name)
  })

program.parse(process.argv)
    