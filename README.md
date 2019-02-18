# Contacto
Contacto is a command line tool contact management system built with Node.js, MongoDB, Commanderjs, and Inquirerjs. It allows you to `create` and `manage` your contact from the command line.

Here's the full tutorial published on [scotch.io](https://scotch.io/tutorials/build-an-interactive-command-line-application-with-nodejs).

## Prerequisites
1. Install [Node.js](https://nodejs.org/en/)
2. Install [MongoDB](https://www.mongodb.org/downloads/)
3. Install [Mongoose](http://mongoosejs.com/)
4. Install [Commanderjs](https://github.com/tj/commander.js)
5. Install [Inquirerjs](https://github.com/SBoudrias/Inquirer.js/)


## Installation
1. Clone the repository [here](https://github.com/mentrie/contacto)
2. Navigate to your terminal and change your directory to the `contacto`.
3. Run `yarn` to install node dependencies.
4. Run `yarn link` to creates a symbolic link between project directory and executable command.

## Usage
```
Usage: contact [options] [command]


  Commands:

    addContact|a           Add a contact
    getContact|r <name>    Get contact
    updateContact|u <_id>  Update contact
    deleteContact|d <_id>  Delete contact
    getContactList|l       List contacts

  Contact management system

  Options:

    -h, --help     output usage information
    -V, --version  output the version number
```

Thank you.
