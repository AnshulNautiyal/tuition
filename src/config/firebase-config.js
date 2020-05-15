const REACT_APP_FIREBASE_API_KEY = process.env.REACT_APP_FIREBASE_API_KEY;
const REACT_APP_PROJECT_ID = process.env.REACT_APP_PROJECT_ID;
const REACT_APP_DATABASE_URL = process.env.REACT_APP_DATABASE_URL;
const REACT_APP_APP_ID = process.env.REACT_APP_APP_ID;
const REACT_APP_MEASUREMENT_ID = process.env.REACT_APP_MEASUREMENT_ID;

export default {
  apiKey: `${REACT_APP_FIREBASE_API_KEY}`,
  authDomain: "ashwani-tuition.firebaseapp.com",
  databaseURL: `${REACT_APP_DATABASE_URL}`,
  projectId: `${REACT_APP_PROJECT_ID}`,
  storageBucket: "ashwani-tuition.appspot.com",
  messagingSenderId: "350530675796",
  appId: `${REACT_APP_APP_ID}`,
  measurementId: `${REACT_APP_MEASUREMENT_ID}`,
};
