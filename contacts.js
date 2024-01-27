const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

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

const getContactById = async (contactId) => {
    try {
        const contacts = await listContacts();
        const contact = contacts.find(contact => contact.id === contactId);
        if (contact) {
            return contact;
        } else {
            return null;
        }
    } catch (error) {
        console.log("Error reading file contacts", error.message);
        return null;
    }
};

const removeContact = async (contactId) => {
    try {
        const contacts = await listContacts();
        const contactsDelete = contacts.find(contact => contact.id === contactId);
        const contactsUpdate = contacts.filter(contact => contact.id !== contactId);
        
        await fs.promises.writeFile(contactsPath, JSON.stringify(contactsUpdate, null, 2));
        if(!contactsDelete) {
            return null;
        } else {
            console.log(`Contact with id ${contactId} has been removed`);
            return contactsDelete;
        }
    }
    catch (error) {
        console.log("Error reading file contacts", error.message);
        return null;
    }
};  

const addContact = async (name, email, phone) => {
    try {
        const newContact = { id: uuidv4(), name, email, phone };
        const contacts = await listContacts();
        const contactsUpdate = [...contacts, newContact];

        await fs.promises.writeFile(contactsPath, JSON.stringify(contactsUpdate, null, 2));
        console.log(`Contact with name ${name} has been added`);
        return newContact;
    } catch (error) {
        console.log("Error reading file contacts", error.message);
        return null;
    }
};

module.exports = {
    listContacts,
    getContactById,
    removeContact,
    addContact
};