import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// added content to this specific method to post to database
export const putDb = async (content) =>  { 
  console.log('Post to the database');

// Create a connection
const contactDb = await openDB('jate', 1);

// used readwrite to the database for access
const tx = contactDb.transaction('jate', 'readwrite');

// object store
const store = tx.objectStore('jate');

//added content
const request = store.add({ jate: content });

// confirming content
const result = await request;
console.log('🚀 - data saved to the database', result)};;

// getting all content
export const getDb = async () => {
  console.log('GET from the database');

  // connection to database
  const contactDb = await openDB('jate', 1);

  // specifying
  const tx = contactDb.transaction('jate', 'readonly');

 
  const store = tx.objectStore('jate');

  // get all data
  const request = store.getAll();

  // Get confirmation of the request.
  const result = await request;
  console.log('result.value', result);
  return result;
};

initdb();
