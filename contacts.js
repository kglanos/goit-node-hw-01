const fs = require('fs');
const path = require('path');

const contactsPath = path.join(__dirname, './db/contacts.json');

const listContacts = async () => {
    try {
        const data = await fs.promises.readFile(contactsPath, 'utf-8');
        const contacts = JSON.parse(data);
        if (contacts) {
            return contacts;
        } else {
            return [];
        }
    } catch (error) {
        console.log("Error reading file contacts", error.message);
        return [];
    }
};

listContacts()
    .then(contacts => {
        console.log("Contacts:");
        console.log(contacts);
    })
    .catch(error => {
        console.error("Error while listing contacts:", error);
    });
