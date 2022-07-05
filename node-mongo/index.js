const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const dboper = require('./operations');

const url = 'mongodb://localhost:27017';
const dbName = 'conFusion';

MongoClient.connect(url, (err, client) => {
    assert.equal(err, null);


    console.log('Connnected to the server!');

    const db = client.db(dbName);
    dboper.insertDocument(db, { name: "Dosa", description: "Test" }, 'dishes', (result) => {

        console.log('Insert Document:\n', result);

        dboper.findDocument(db, 'dishes', (docs) => {
            console.log('Found Documents:\n', docs);

            dboper.updateDocument(db, { name: 'Dosa' }, { description: 'Updated-Test' }, 'dishes', (result) => {

                console.log('Updated Document:\n', result.result);

                dboper.findDocument(db, 'dishes', (docs) => {
                    console.log('Found Documents:\n', docs);

                    db.dropCollection('dishes', (result) => {
                        console.log("Drop Collection: ", result);
                        client.close()
                    });
                });
            });
        });
    });
});