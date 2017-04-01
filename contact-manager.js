const program = require('commander');
const { getAllContacts, addContacts } = require('./business-logic'); 

    program
      .version('0.0.1')
      .description('Contact management system')
    
    program
      .command('getAllContacts')
      .alias('ga')
      .description('Get all contact')
      .action(() => {
        console.log('awesome man')
        getAllContacts()
      })

    program
      .command('addContacts')
      .alias('ac')
      .description('Add contact')
      .action(() => {
        console.log('tessting man')
        addContacts()
      })

    program.parse(process.argv)
    
    // console.log(program.list);