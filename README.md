<h1 style="color: blue; font-size: 24px; text-align: center;">Task results:</h1>

# Otrzymujemy i wyprowadzamy całą listę kontaktów w postaci tabeli (console.table)

node index.js --action list

<img src="./printscreans/action list.jpg" alt="Contacts List">

# Otrzymujemy kontakt po id

node index.js --action get --id 05olLMgyVQdWRwgKfg5J6

<img src="./printscreans/action id.jpg" alt="Get contact by id">

# Dodajemy kontakt

node index.js --action add --name Mango --email mango@gmail.com --phone 322-22-22

<img src="./printscreans/action add.jpg" alt="Add contact">

# Usuwamy kontakt

node index.js --action remove --id qdggE76Jtbfd9eWJHrssH

<img src="./printscreans/action delete.jpg" alt="Remove contact">