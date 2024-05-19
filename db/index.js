import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, push, onValue } from "firebase/database";
import dotenv from "dotenv";
dotenv.config("../.env");

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASEAPI,
  authDomain: process.env.PROjectID + ".firebaseapp.com",
  projectId: process.env.PROJECTID,
  storageBucket: process.env.PROJECTID + ".appspot.com",
  messagingSenderId: "510517210525",
  appId: "1:510517210525:web:bb6acb1ef16c9a0de25374",
  databaseURL: process.env.DATABASEURL
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

async function WriteBook(obj) {
  const BookRef = ref(database, "books");
  const newBookId = push(BookRef);
  set(newBookId, obj);
}

async function ReadBooksList() {
  const BookRef = ref(database, "books");
  onValue(BookRef, (snapshot) => {
    snapshot.forEach((item) => {
      console.log(item.key);
      console.log(item.val());
    })
  })
}

async function ReadBook(ID) {
  const BookRef = ref(database, "books/" + ID);
  onValue(BookRef, item => {
    console.log(item.val().name);
  });
}
// await WriteBook({
  // "name" : "Power ch Naam",
  // "year" : 1990
// })

// ReadBooksList(); 
ReadBook("-Ny9K6DrnPFcxUaAXN4h");

export {
  WriteBook,
  ReadBooksList,
  ReadBook
}