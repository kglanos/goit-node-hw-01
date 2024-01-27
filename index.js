const colors = require('colors');

const { Command } = require('commander');
const program = new Command();
program
    .option("-a, --action <type>", "choose action")
    .option("-i, --id <type>", "user id")
    .option("-n, --name <type>", "user name")
    .option("-e, --email <type>", "user email")
    .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();

const { listContacts, getContactById, removeContact, addContact } = require('./contacts');

async function invokeAction({ action, id, name, email, phone }) {
    try {
        switch (action) {
            case 'list':
                const contacts = await listContacts();
                console.table(contacts);
                break;

            case 'get':
                const contact = await getContactById(id);
                if (contact) {
                    console.table(contact);
                } else {
                    console.table(`Contact with id=${id} not found`.red);
                }
                break;

            case 'add':
                const newContact = await addContact(name, email, phone);
                console.table(newContact);
                break;

            case 'remove':
                const contactsDelete = await removeContact(id);
                if (contactsDelete) {
                    console.table(`Contact with id=${id} deleted`.green);
                } else {
                    console.table(`Contact with id=${id} not found`.red);
                }
                break;

            default:
                console.warn("\x1B[31m Unknown action type!");
        }
    } catch (error) {     
        console.log(`Błąd: ${error.message}`);
    }
}

invokeAction(argv);
