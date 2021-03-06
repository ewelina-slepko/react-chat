import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBzCZQfAX7MWzVVd0VEB9F8mAOempmSGKg",
  authDomain: "my-react-live-chat.firebaseapp.com",
  projectId: "my-react-live-chat",
  storageBucket: "my-react-live-chat.appspot.com",
  messagingSenderId: "102464025090",
  appId: "1:102464025090:web:78297ca6ef11acae302d1b",
  measurementId: "G-9F125TSTZ1",
};

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export {db}
